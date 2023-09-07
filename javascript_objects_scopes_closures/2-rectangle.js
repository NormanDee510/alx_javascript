#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0) {
        // Create an empty object with no properties
        return Object.create(null);
      }
      this.width = w;
      this.height = h;
    }
  }
  
  module.exports = Rectangle;
  
  
