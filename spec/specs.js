describe('factorial', function() {
  it('returns 1 when zero is entered', function() {
    factorial("0").should.equal(1);
  });
  it('multiplies a number by all of the positive integers less than that number', function() {
    factorial("5").should.equal(120);
  });
  it('returns false for any negative number ', function() {
    factorial("-1").should.equal(false);
  });
  it('returns false for any noninteger', function() {
    factorial("5.2").should.equal(false);
  });
});

