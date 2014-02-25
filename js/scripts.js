var factorial = function(number1) {
 var number = parseInt(number1);
 
  if (number1 % 1 !== 0){
    return false;
  
    } else if (number < 0) {
      return false;
    } else if (number === 0) {
      return 1;
    } else {
      return number * (factorial(number - 1));
    }
  }; 



$(function(){
  $("form#factorial").submit(function(event){
    var number = $("input#number").val();
    var result = factorial(number);
    console.log(result);
    $(".number").text(result);

    $("#result").show();
    event.preventDefault();

  }); 
});
  
