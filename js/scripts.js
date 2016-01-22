var numbers = [];       // declare some vars
var result = "";

function pingPong (endNumber) {
  var numbers = [];     // clear the array each time function runs
  for(var i = 1; i <= endNumber; i++){
    numbers.push(i);
    result = numbers.join(', ');  //make array a string w/ correct formatting
  };
  return result;
};
