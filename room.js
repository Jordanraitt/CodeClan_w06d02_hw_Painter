// A room should:
//
// have an area in square meters
// should start not painted
// should be able to be painted


const Room = function(area, painted, paintable) {

  this.area       = area;
  this.painted    = painted;
  this.paintable  = paintable;
};

module.exports = Room;
