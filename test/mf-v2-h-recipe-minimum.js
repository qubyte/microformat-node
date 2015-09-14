/*
Microformats Test Suite - Downloaded from github repo: microformats/tests version v0.1.23 
Mocha integration test from: microformats-v2/h-recipe/minimum
The test was built on Wed Sep 09 2015 16:39:33 GMT+0100 (BST)
*/

var chai = require('chai'),
   assert = chai.assert,
   helper = require('../test/helper.js');


describe('h-recipe', function() {
   var htmlFragment = "<div class=\"h-recipe\">  \n    <p class=\"p-name\">Toast</p>\n    <ul>\n        <li class=\"e-ingredient\">Slice of bread</li>\n        <li class=\"e-ingredient\">Butter</li>\n    </ul>\n</div>";
   var found = helper.parseHTML(htmlFragment,'http://example.com/');
   var expected = {"items":[{"type":["h-recipe"],"properties":{"name":["Toast"],"ingredient":[{"value":"Slice of bread","html":"Slice of bread"},{"value":"Butter","html":"Butter"}]}}],"rels":{},"rel-urls":{}};

   it('minimum', function(){
       assert.deepEqual(found, expected);
   });
});
