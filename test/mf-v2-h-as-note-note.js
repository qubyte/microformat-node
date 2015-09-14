/*
Microformats Test Suite - Downloaded from github repo: microformats/tests version v0.1.23 
Mocha integration test from: microformats-v2/h-as-note/note
The test was built on Wed Sep 09 2015 16:39:33 GMT+0100 (BST)
*/

var chai = require('chai'),
   assert = chai.assert,
   helper = require('../test/helper.js');


describe('h-as-note', function() {
   var htmlFragment = "<!-- http://tantek.com/2015/152/t2/proud-withknown-indieweb-user-empathy -->\n<base href=\"http://tantek.com/\" />\n\n<li class=\"h-entry hentry h-as-note\">\n   <div>\n      <ul>\n         <li>\n            <a href=\"152/t1/congrats-fellow-elected-w3cab-members\" id=\"previtem\" title=\"View the previous (older) item in the stream.\"\n            rel=\"prev\"><abbr title=\"Previous\">←</abbr></a>\n         </li>\n         <li>\n            <a href=\"152/t3/going-indiewebcamp-2015-portland\" id=\"nextitem\" title=\"View the next (newer) item in the stream\" rel=\"next\"><abbr title=\"Next\">→</abbr></a>\n         </li>\n      </ul>\n   </div>\n   <div>In reply to:\n      <p>\n         <a class=\"u-in-reply-to h-cite\" rel=\"in-reply-to\" href=\"http://werd.io/2015/im-super-proud-of-everything-weve-done-on-withknown-so-far\">http://werd.io/2015/im-super-proud-of-everything-weve-done-on-withknown-so-far</a>\n      </p>\n      <p>\n         <a class=\"u-in-reply-to h-cite\" rel=\"in-reply-to\" href=\"https://twitter.com/benwerd/status/604733231284383744\">https://twitter.com/benwerd/status/604733231284383744</a>\n      </p>\n      <hr>\n   </div>\n   <a href=\"../\" class=\"p-author h-card\" rel=\"author\" title=\"Tantek Çelik\"><img src=\"/images/photo.gif\" alt=\"Tantek Çelik\"></a>\n   <p class=\"p-name entry-title e-content entry-content article\">\n      <a class=\"auto-link h-x-username\" href=\"https://twitter.com/benwerd\">@benwerd</a>\n      <a class=\"auto-link h-x-username\" href=\"https://twitter.com/erinjo\">@erinjo</a>also proud of you &amp;\n      <a class=\"auto-link h-x-username\" href=\"https://twitter.com/withknown\">@withknown</a>— so much #indieweb &amp; especially user empathy. Keep up the great work!</p>\n   <span>\n      <span class=\"dt-published published dt-updated updated\">\n         <time class=\"value\" datetime=\"22:20-0700\">22:20</time>on\n         <time class=\"value\">2015-06-01</time>\n      </span>\n      <span class=\"lt\">(ttk.me t4bT2)</span>using\n      <span class=\"using\">BBEdit</span>\n   </span>\n   <div>\n      <form action=\"http://tantek.com/2015/152/t2/proud-withknown-indieweb-user-empathy\">\n         <div>\n            <label>\n               <span class=\"lt\">URL:</span>\n               <input class=\"u-url url u-uid uid bookmark\" type=\"url\" size=\"70\" style=\"max-width:100%\" value=\"http://tantek.com/2015/152/t2/proud-withknown-indieweb-user-empathy\">\n            </label>\n         </div>\n      </form>\n   </div>\n   <div>\n      <a class=\"u-syndication\" rel=\"syndication\" style=\"float:right;\" href=\"https://twitter.com/t/status/605604965566906369\">\n   <img src=\"/images/photo.gif\" style=\"vertical-align:-30%\" alt=\"\"> \n   View \n      Conversation\n      on Twitter\n</a>\n   </div>\n</li>";
   var found = helper.parseHTML(htmlFragment,'http://example.com/');
   var expected = {"items":[{"type":["h-entry","h-as-note"],"properties":{"in-reply-to":[{"value":"http://werd.io/2015/im-super-proud-of-everything-weve-done-on-withknown-so-far","type":["h-cite"],"properties":{"name":["http://werd.io/2015/im-super-proud-of-everything-weve-done-on-withknown-so-far"],"url":["http://werd.io/2015/im-super-proud-of-everything-weve-done-on-withknown-so-far"]}},{"value":"https://twitter.com/benwerd/status/604733231284383744","type":["h-cite"],"properties":{"name":["https://twitter.com/benwerd/status/604733231284383744"],"url":["https://twitter.com/benwerd/status/604733231284383744"]}}],"author":[{"type":["h-card"],"properties":{"name":["Tantek Çelik"],"photo":["http://tantek.com/images/photo.gif"],"url":["http://tantek.com/"]}}],"name":["@benwerd\n      @erinjoalso proud of you &\n      @withknown— so much #indieweb & especially user empathy. Keep up the great work!"],"content":[{"value":"@benwerd\n      @erinjoalso proud of you &\n      @withknown— so much #indieweb & especially user empathy. Keep up the great work!","html":"\n      <a class=\"auto-link h-x-username\" href=\"https://twitter.com/benwerd\">@benwerd</a>\n      <a class=\"auto-link h-x-username\" href=\"https://twitter.com/erinjo\">@erinjo</a>also proud of you &\n      <a class=\"auto-link h-x-username\" href=\"https://twitter.com/withknown\">@withknown</a>— so much #indieweb & especially user empathy. Keep up the great work!"}],"published":["2015-06-01 22:20-07:00"],"updated":["2015-06-01 22:20-07:00"],"url":["http://tantek.com/2015/152/t2/proud-withknown-indieweb-user-empathy"],"uid":["http://tantek.com/2015/152/t2/proud-withknown-indieweb-user-empathy"],"syndication":["https://twitter.com/t/status/605604965566906369"]},"children":[{"value":"@benwerd","type":["h-x-username"],"properties":{"name":["@benwerd"],"url":["https://twitter.com/benwerd"]}},{"value":"@erinjo","type":["h-x-username"],"properties":{"name":["@erinjo"],"url":["https://twitter.com/erinjo"]}},{"value":"@withknown","type":["h-x-username"],"properties":{"name":["@withknown"],"url":["https://twitter.com/withknown"]}}]}],"rels":{"prev":["http://tantek.com/152/t1/congrats-fellow-elected-w3cab-members"],"next":["http://tantek.com/152/t3/going-indiewebcamp-2015-portland"],"in-reply-to":["http://werd.io/2015/im-super-proud-of-everything-weve-done-on-withknown-so-far","https://twitter.com/benwerd/status/604733231284383744"],"author":["http://tantek.com/"],"syndication":["https://twitter.com/t/status/605604965566906369"]},"rel-urls":{"http://tantek.com/152/t1/congrats-fellow-elected-w3cab-members":{"title":"View the previous (older) item in the stream.","text":"←","rels":["prev"]},"http://tantek.com/152/t3/going-indiewebcamp-2015-portland":{"title":"View the next (newer) item in the stream","text":"→","rels":["next"]},"http://werd.io/2015/im-super-proud-of-everything-weve-done-on-withknown-so-far":{"text":"http://werd.io/2015/im-super-proud-of-everything-weve-done-on-withknown-so-far","rels":["in-reply-to"]},"https://twitter.com/benwerd/status/604733231284383744":{"text":"https://twitter.com/benwerd/status/604733231284383744","rels":["in-reply-to"]},"http://tantek.com/":{"title":"Tantek Çelik","rels":["author"]},"https://twitter.com/t/status/605604965566906369":{"text":"View \n      Conversation\n      on Twitter","rels":["syndication"]}}};

   it('note', function(){
       assert.deepEqual(found, expected);
   });
});
