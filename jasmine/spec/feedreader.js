/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         // The following test checks if allFeeds has URL defined and is not empty
         it('urls are defined', function() {
             expect(feedUrl).toBeDefined();
             expect(feedUrl.length).not.toBe(0);
         });


         // The following test checks if allFeeds has name defined is are not empty
         it('names are defined', function() {
             expect(feedName).toBeDefined();
             expect(feedName.length).not.toBe(0);
         });
    });


    // Writing a new test suite named "The menu"
    describe('The Menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         // The following test checks for 'the menu' to be hidden by default
         it('is hidden by default', function() {
           var isHidden = $('body').hasClass('menu-hidden');
           expect(isHidden).toBe(true);
         });

          // The following test checks if the menu icon is clicked, does the menu appear and does ... 
          // it hide if the menu icon is clicked again

          it('toggles On and Off', function() {
            var menuIcon = $('.menu-icon-link');
            // toggling the menu ON
            menuIcon.click();
            var isVisible = $('body').hasClass('menu-hidden');
            expect(isVisible).toBe(false);
            // toggling the menu OFF
            menuIcon.click();
            var menuHidden = $('body').hasClass('menu-hidden');
            expect(menuHidden).toBe(true);
          });
    });

    // Writing a new test suite named "Initial Entries"
    describe('Initial Entries', function() {

        /* The following test checks that there is at least
         * a single .entry element within the .feed container.
         */

         beforeEach(function(done) {
           loadFeed(0, done);
         });


         it('has atleast one entry', function() {
           var entry = $('.feed .entry').length;
           console.log(entry);
           expect(entry).not.toBe(0);
         });
    });

    //Writing a new test suite named "New Feed Selection"
    describe('New Feed Selection', function() {
        // The follwing checks for the change of content 
        // when a new feed is loaded by loadFeed().
         

         var currentFeed;
         var nextFeed;

         beforeEach(function(done) {
           loadFeed(0, function() {
             currentFeed = $('.feed').html();
             console.log(currentFeed);
             done();
           });

           loadFeed(1, function() {
             nextFeed = $('.feed').html();
             console.log(nextFeed);
             done();
           });
         });

         it('changes the content', function() {
           expect(currentFeed).not.toBe(nextFeed);
         });
   });
}());
