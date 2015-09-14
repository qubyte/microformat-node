/*
Microformats Test Suite - Downloaded from github repo: microformats/tests version v0.1.23 
Mocha integration test from: microformats-v2/h-org/simple
The test was built on Wed Sep 09 2015 16:39:33 GMT+0100 (BST)
*/

var chai = require('chai'),
   assert = chai.assert,
   helper = require('../test/helper.js');


describe('h-org', function() {
   var htmlFragment = "<span class=\"h-org\">Mozilla Foundation</span>";
   var found = helper.parseHTML(htmlFragment,'http://example.com/');
   var expected = {"items":[{"type":["h-org"],"properties":{"name":["Mozilla Foundation"]}}],"rels":{},"rel-urls":{}};

   it('simple', function(){
       assert.deepEqual(found, expected);
   });
});
