var numbers = [];
var result = "";
function pingPong (endNumber) {
  var numbers = [];
  for(var i = 1; i <= endNumber; i++){
    numbers.push(i);
    result = numbers.join(', ');
  };
  return result;
};
