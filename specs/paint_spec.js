const assert = require('assert');
const Room = require('../Room.js');
const Paint = require('../Paint.js');
const Decorator = require('../Decorator.js');
//
// // A paint can should:
// //
// // have a number of litres of paint
// // be able to check if it is empty
// // be able to empty itself of paint
//
//
describe('Paint', function(){
//
//
  let paint;

  beforeEach(function(){
  paint = new Paint(3);
  //new instance of paint has (number of litres)
  });

  it('should have a number of litres', function(){
      const actual = paint.litres;
      assert.strictEqual(actual, 3)

  });

  it('should be able to check if it is empty', function(){
    const actual = paint.isEmpty();
    assert.strictEqual(actual, false)

  });

  it('should be able to empty itself of paint',
 function(){
   const actual = paint.drain();
   assert.strictEqual(actual, 0)
  });
});
