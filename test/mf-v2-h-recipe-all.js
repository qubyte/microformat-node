/*
Microformats Test Suite - Downloaded from github repo: microformats/tests version v0.1.23 
Mocha integration test from: microformats-v2/h-recipe/all
The test was built on Wed Sep 09 2015 16:39:33 GMT+0100 (BST)
*/

var chai = require('chai'),
   assert = chai.assert,
   helper = require('../test/helper.js');


describe('h-recipe', function() {
   var htmlFragment = "<section class=\"h-recipe\">\n    <h1 class=\"p-name\">Yorkshire Puddings</h1>      \n    <p class=\"p-summary\">Makes <span class=\"p-yield\">6 good sized Yorkshire puddings</span>, the way my mum taught me</p>\n\n\n    <p><img class=\"u-photo\" src=\"http://codebits.glennjones.net/semantic/yorkshire-puddings.jpg\" /></p>\n\n    <span class=\"p-review h-review-aggregate\">\n        <span class=\"p-rating\">\n            <span class=\"p-average\">4.5</span> stars out 5 based on </span>\n            <span class=\"p-count\">35</span> reviews</span>\n         \n    \n\n    <div id=\"ingredients-container\">\n        <h3>Ingredients</h3>\n        <ul>\n            <li class=\"e-ingredient\">1 egg</li>\n            <li class=\"e-ingredient\">75g plain flour</li>\n            <li class=\"e-ingredient\">70ml milk</li>\n            <li class=\"e-ingredient\">60ml water</li>\n            <li class=\"e-ingredient\">Pinch of salt</li>\n        </ul>\n    </div>\n\n    <h3>Time</h3>\n    <ul>\n        <li class=\"prepTime\">Preparation <span class=\"value-title\" title=\"PT0H10M\">10 mins</span></li>\n        <li class=\"cookTime\">Cook <span class=\"value-title\" title=\"PT0H25M\">25 mins</span></li>\n    </ul> \n\n\n    <h3>Instructions</h3>\n    <div class=\"e-instructions\">\n        <ol>\n            <li>Pre-heat oven to 230C or gas mark 8. Pour the vegetable oil evenly into 2 x 4-hole \n            Yorkshire pudding tins and place in the oven to heat through.</li> \n            \n            <li>To make the batter, add all the flour into a bowl and beat in the eggs until smooth. \n            Gradually add the milk and water while beating the mixture. It should be smooth and \n            without lumps. Finally add a pinch of salt.</li>\n            \n            <li>Make sure the oil is piping hot before pouring the batter evenly into the tins. \n            Place in the oven for 20-25 minutes until pudding have risen and look golden brown</li>\n        </ol>\n    </div>\n\n    <h3>Nutrition</h3>\n    <ul id=\"nutrition-list\">\n        <li class=\"p-nutrition\">Calories: <span class=\"calories\">125</span></li>\n        <li class=\"p-nutrition\">Fat: <span class=\"fat\">3.2g</span></li>\n        <li class=\"p-nutrition\">Cholesterol: <span class=\"cholesterol\">77mg</span></li>\n    </ul>\n    <p>(Amount per pudding)</p>\n\n    <p>\n        Published on <time class=\"dt-published\" datetime=\"2011-10-27\">27 Oct 2011</time> by \n        <span class=\"p-author h-card\">\n            <a class=\"p-name u-url\" href=\"http://glennjones.net\">Glenn Jones</a>\n        </span>\n    </p>\n    <a href=\"http://www.flickr.com/photos/dithie/4106528495/\">Photo by dithie</a>\n    </section>";
   var found = helper.parseHTML(htmlFragment,'http://example.com/');
   var expected = {"items":[{"type":["h-recipe"],"properties":{"name":["Yorkshire Puddings"],"summary":["Makes 6 good sized Yorkshire puddings, the way my mum taught me"],"yield":["6 good sized Yorkshire puddings"],"photo":["http://codebits.glennjones.net/semantic/yorkshire-puddings.jpg"],"review":[{"value":"4.5 stars out 5 based on \n            35 reviews","type":["h-review-aggregate"],"properties":{"rating":["4.5 stars out 5 based on"],"average":["4.5"],"count":["35"],"name":["4.5 stars out 5 based on \n            35 reviews"]}}],"ingredient":[{"value":"1 egg","html":"1 egg"},{"value":"75g plain flour","html":"75g plain flour"},{"value":"70ml milk","html":"70ml milk"},{"value":"60ml water","html":"60ml water"},{"value":"Pinch of salt","html":"Pinch of salt"}],"instructions":[{"value":"Pre-heat oven to 230C or gas mark 8. Pour the vegetable oil evenly into 2 x 4-hole \n            Yorkshire pudding tins and place in the oven to heat through. \n            \n            To make the batter, add all the flour into a bowl and beat in the eggs until smooth. \n            Gradually add the milk and water while beating the mixture. It should be smooth and \n            without lumps. Finally add a pinch of salt.\n            \n            Make sure the oil is piping hot before pouring the batter evenly into the tins. \n            Place in the oven for 20-25 minutes until pudding have risen and look golden brown","html":"\n        <ol>\n            <li>Pre-heat oven to 230C or gas mark 8. Pour the vegetable oil evenly into 2 x 4-hole \n            Yorkshire pudding tins and place in the oven to heat through.</li> \n            \n            <li>To make the batter, add all the flour into a bowl and beat in the eggs until smooth. \n            Gradually add the milk and water while beating the mixture. It should be smooth and \n            without lumps. Finally add a pinch of salt.</li>\n            \n            <li>Make sure the oil is piping hot before pouring the batter evenly into the tins. \n            Place in the oven for 20-25 minutes until pudding have risen and look golden brown</li>\n        </ol>\n    "}],"nutrition":["Calories: 125","Fat: 3.2g","Cholesterol: 77mg"],"published":["2011-10-27"],"author":[{"value":"Glenn Jones","type":["h-card"],"properties":{"name":["Glenn Jones"],"url":["http://glennjones.net"]}}],"url":["http://www.flickr.com/photos/dithie/4106528495/"]}}],"rels":{},"rel-urls":{}};

   it('all', function(){
       assert.deepEqual(found, expected);
   });
});
