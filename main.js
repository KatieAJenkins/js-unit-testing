'use strict';

  module.exports = {
    greeting: function(name) { //greeting is method on this object
      //handle arguments.length != 1;
      if(arguments.length !== 1) {
        return "I accept only one argument";
      }
      if(typeof name !== 'string') {
        return "I want a string";
      }
      return `Hello, ${name}`;
    }
  };

module.exports = {
    reduce: function(array) {
      if(Array.isArray !== 'object') {
        return "I want an array";
      }
     }
   };
