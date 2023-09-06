#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
        // If w or h is not a positive integer, create an empty object
        return { };
      }
      window.width = w;
      window.height = h;
    }
  }
  
  module.exports = Rectangle;
  