/* feedreader.js 
* Author - Kim Pettersson.
*/

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        /* This tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('has url', function() {
            allFeeds.forEach(function(element) {
                expect(element.url).toBeDefined();
                expect(element.url.length).not.toBe(0);
            });
         });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('has name', function() {
            allFeeds.forEach(function(element) {
                expect(element.name).toBeDefined();
                expect(element.name.length).not.toBe(0);
            });
         });
 
    });


    describe('The menu', function() {
        const body = $("body");
        const menuIcon = $(".menu-icon-link");
        /* A test that ensures the menu element is
         * hidden by default.
         */
         it('is default hidden', function() {
            expect(body.hasClass("menu-hidden")).toBeTruthy();
         });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('toggles visibility', function() {
            menuIcon.trigger("click");
            expect(body.hasClass("menu-hidden")).toBeFalsy();

            menuIcon.trigger("click");
            expect(body.hasClass("menu-hidden")).toBeTruthy();
         });
    });

    describe('Initial Entries', function() {
        const feed = $(".feed");
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('shows up in Feed on load', function(done) {
            expect(feed.children().length).toBeGreaterThan(0);
            done();
        });
    });

    describe('New Feed Selection', function() {
        const feed = $(".feed");
        let onLoadFeed;
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
         beforeEach(function(done) {
            loadFeed(0, function () {
                onLoadFeed = feed.html();
                loadFeed(1, done);
            });
        });

        it('updates content in feed', function(done) {
            expect(feed.html()).not.toBe(onLoadFeed);
            done();
        });
    });
}());
