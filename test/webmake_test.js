'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.webmake = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },

  default_options: function(test) {
    test.expect(1);
    test.equal(grunt.file.exists("tmp/compiled.js"), true, 'should output compiled js file.');
    test.done();
  },

  missing_file: function(test) {
    test.expect(1);
    test.equal(grunt.file.exists("tmp/missing_file.js"), false, 'should fail if entry file does not exist.');
    test.done();
  },

  multiple_entry_files: function(test) {
    test.expect(1);
    test.equal(grunt.file.exists("tmp/multiple_entry_files.js"), false, 'should fail if multiple entry files are passed.');
    test.done();
  },
};
