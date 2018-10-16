const assert = require('assert');
const Room = require('../Room.js');
const Paint = require('../Paint.js');
const Decorator = require('../Decorator.js');


describe('Decorator', function(){

  beforeEach(function(){
    decorator = new Decorator();
    paint = new Paint(5);
    room = new Room(5, false, true);
  //new instance of paint has (number of litres)
  });

  it('start with an empty paint stock', function(){
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, []);
  });

  it('be able to add a can of paint to paint stock', function(){
    decorator.addPaint(paint)
    const expected = [paint]
    const actual = decorator.stock
    assert.deepStrictEqual(actual, expected);
  });

  it('be able to calculate total litres paint it has in stock', function(){
      decorator.addPaint(paint)
      actual = decorator.stock[0].litres
      assert.deepStrictEqual(actual, 5)
  });

  it('be able to calculate whether is has enough paint to paint a room', function(){
    decorator.addPaint(paint)
    actual = decorator.enoughPaint(room);
    expected = true
    assert.deepStrictEqual(actual, true)
  });

  it('be able to paint room if has enough paint in stock', function(){
    decorator.addPaint(paint)
    actual = decorator.canPaint(room);
    expected = true
    assert.strictEqual(actual, true)
    });

});
