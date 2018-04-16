## Description

Testing is an important part of the development process... So I got provided with an project from Udacity to write tests on.
I'm using [Jasmine](https://jasmine.github.io/) v.2.1.2 to do this.


## Instructions:

1. Dowload zip or clone this repository to your computer.
2. Open the file **index.html** in your browser. When the feeds are successfully loaded you can see the test results at the bottom of the page.
- To add more tests, open **jasmine/spec/feedreader.js** and add your code/tests.

## Standard Test's:
- Checks that.. 
	- RSS Feeds are defined.
	- Feed’s has Url and is not empty.
	- Feed’s has name and is not empty.
	- Menu is hidden by default.
	- Menu toggles visibility on click.
	- Feeds’ has at least 1 .entry element in .feed container.
	- Feeds’ content changes when a new feed is being loaded.