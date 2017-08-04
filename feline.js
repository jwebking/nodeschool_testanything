var test = require('tape');
var feedCat = require(process.argv[2]);

test('Lets feed the cat', function(t) {
    t.plan(3);
    t.equal(feedCat('shrimp'), 'yum');
    t.throws(function(){
        feedCat('chocolate');
    }, 'thats not good for the cat!');
    t.throws(feedCat.bind(null, 'chocolate'));
});