var test = require('tape');
var fancify = require(process.argv[2]);

test('fancify', function (t) {
   t.equal(fancify('Hello'),'~*~Hello~*~', 'Want Hello wrapped in ~ and *');
   t.equal(fancify('Hello',true),'~*~HELLO~*~', 'Want Hello wrapped in ~ and *');
   t.equal(fancify('Hello',false, '!'),'~!~Hello~!~', 'Want Hello wrapped in ~ and !');
   t.end();
});

// read the tape docs https://www.npmjs.com/package/tape and equal seemed like the best function for the job. Forgot the t.end for a long time...