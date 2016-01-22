var numbers = [];
var result = "";

function pingPong (endNumber) {
  var numbers = [];     // clear the array each time function runs
  for (var i = 1; i <= endNumber; i++) {
    if (i % 15 === 0) {
      numbers.push("pingpong");
    } else if (i % 3 === 0) {
      numbers.push("ping");
    } else if (i % 5 === 0) {
      numbers.push("pong");
    } else {
      numbers.push(i);
    };
  };
  result = numbers.join(', ');  // make array a string w/ correct formatting
  return result;
};

$(function(){
  $("form#userInput").submit(function(event){
    $("#result").empty();
    var endNumber = $("input#endNumber").val();
    var errorCheck = $.isNumeric(endNumber);
      if (errorCheck = true) {
        $("#result").append(pingPong(endNumber));
      } else if (errorCheck = false) {
        $("#result").append("Please enter a number");
      };
    event.preventDefault();
  });
});
