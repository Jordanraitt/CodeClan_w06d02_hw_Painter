// A paint can should:
//
// have a number of litres of paint
// be able to check if it is empty
// be able to empty itself of paint


const Paint = function(litres) {

  this.litres = litres

};

Paint.prototype.isEmpty = function(){

  if (this.litres == 0)
    {
    return true;
    };
return false;
};

Paint.prototype.drain = function(){
  return this.litres = 0
};

module.exports = Paint;
