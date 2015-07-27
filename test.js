var should = require('chai').should();


describe('year', function(){
  it('should pass', function(done){
    done();
  });

  it('should equal 15', function(){
    var x = 5;
    var y = 10;
    var sum = x + y;
    sum.should.equal(15);
  });

  it('truthyness', function (done) {
    true.should.be.true;
    false.should.be.false;
    done();
  });
});

