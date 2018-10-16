const assert = require('assert');
const Room = require('../room.js');



describe('Room', function(){

  let room;

  beforeEach(function(){
  room = new Room(3, false, true);
  //new instance of paint has (number of litres)
  });

  it('have an area in square meters', function(){
    const actual = room.area;
    assert.strictEqual(actual, 3)
  });

  it('should start not painted', function(){
    const actual = room.painted;
    assert.strictEqual(actual, false)
  });

  it('should be able to be painted', function(){
    const actual = room.paintable;
    assert.strictEqual(actual, true)
  });


});
