var Contact = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

var Address = {
  fullAddress: function(){
    return this.street + ', ' + this.city +', ' + this.state;
  },
  invalidAddress: function(){
    if(this.street === '' || this.city === '' || this.state === ""){
      return true;
    } else {
      return false;
    }
  }
};

var PhoneNumber = {
  invalidNumber: function() {
    if(this.number.length < 10) {
      return true;
    } else {
      return false;
    }
  },
  listNumber: function(){
        return this.number;
  }
};


$(document).ready(function() {
  var addressInvalid = false;
  var numberInvalid = false;
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = Object.create(Contact);
    newContact.firstName = inputtedFirstName;
    newContact.lastName = inputtedLastName;

    newContact.phoneNumbers = [];
    newContact.addresses = [];

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();

      var newAddress = Object.create(Address);
      newAddress.street = inputtedStreet;
      newAddress.city = inputtedCity;
      newAddress.state = inputtedState;
      
      
      newContact.addresses.push(newAddress);
    
    });

    $('.new-phoneNumber').each(function(){
      var inputtedNumber = $(this).find('.newNumber').val()
      var newNumber = Object.create(PhoneNumber);
      
      newNumber.number = inputtedNumber;
      newContact.phoneNumbers.push(newNumber);
     
      });

   
    numberInvalid =  newContact.phoneNumbers.some(function(element){
     if (element.invalidNumber()){
      return  true;
    } else {
      return false;
    }
    })
    

    addressInvalid = newContact.addresses.some(function(element) {
      if (element.invalidAddress()){
        return true;
      } else {
        return false;
      }

      console.log(addressInvalid)
    })
    
    if ( !numberInvalid && !addressInvalid){
    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();

      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
      
      $("ul#phoneNumbers").text("");
      newContact.phoneNumbers.forEach(function(number) {
      $("ul#phoneNumbers").append("<li>" + number.listNumber() + "</li>");
      });

    });

    this.reset();
  } else {

    alert('not valid info')
  }
  });


  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                             '<div class="form-group">' +
                               '<label for="new-street">Street</label>' +
                               '<input type="text" class="form-control new-street">' +
                             '</div>' +
                             '<div class="form-group">' +
                               '<label for="new-city">City</label>' +
                               '<input type="text" class="form-control new-city">' +
                              '</div>' +
                              '<div class="form-group">' +
                                '<label for="new-state">State</label>' +
                                '<input type="text" class="form-control new-state">' +
                              '</div>' +
                              '</div>');
    });

  $("#add-number").click(function() {
    $("#new-phone-numbers").append('<div class="new-phoneNumber">' +
                                    '<div class="form-group">' +
                                      '<label for="new-number">Phone number</label>' +
                                      '<input type="text" class="form-control newNumber">' +
                                    '</div>' +
                                    '</div>');
   });
});

