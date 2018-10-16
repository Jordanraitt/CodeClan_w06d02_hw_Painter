const Paint = require('./paint.js');
const Room = require('./room.js');
// A decorator should:
//
// start with an empty paint stock
// be able to add a can of paint to paint stock
// be able to calculate total litres paint it has in stock
// be able to calculate whether is has enough paint to paint a room
// be able to paint room if has enough paint in stock


const Decorator = function(){

this.stock = [];

};

Decorator.prototype.addPaint = function(paint){
  this.stock.push(paint);
};

Decorator.prototype.enoughPaint = function(room){

  if (this.stock[0].litres === room.area){
    return true;
    };
  return false;
};


Decorator.prototype.canPaint = function(room){

if (room.paintable && decorator.enoughPaint(room)){
  return true;
  };
return false;
};


module.exports = Decorator
