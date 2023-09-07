#!/usr/bin/node
class Rectangle {
    constructor(w, h) {        
        if (w > 9 || h > 9) {
            return {}; 
          }
          this.width = w;
          this.height = h;      
    }
    
  }
  
  module.exports = Rectangle;
  
  
