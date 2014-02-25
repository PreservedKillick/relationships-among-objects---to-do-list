describe("Address", function() {
  describe("fullAddress", function() {
    it("returns the full address with nice formatting", function() {
      var testAddress = Object.create(Address);
      testAddress.street = "123 4th Ave";
      testAddress.city = "Portland";
      testAddress.state = "Oregon";
      testAddress.fullAddress().should.equal("123 4th Ave, Portland, Oregon");
    });
  });
  describe('validAddress', function(){
    it('prevents form submission if address is not valid', function(){
      var testAddress = Object.create(Address);
      testAddress.street = "";
      testAddress.city = "Portland";
      testAddress.state = "Oregon";
      testAddress.validAddress().should.equal(false)
    })
  })
});

describe('validNumber', function() {
  it('prevents contact creation if phone number is not 10 digits long', function() {
    var testNumber = Object.create(PhoneNumber);
    testNumber.inputtedNumber = 123456;
    testNumber.validNumber().should.equal(false)
  });
});
