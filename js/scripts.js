var numbers = [];
// var result = "";

function pingPong (endNumber) {
  var numbers = [];     // clear the array each time function runs
  for (var i = 1; i <= endNumber; i++) {
    if (i % 3 === 0) {
    numbers.push("ping");
    } else {
    numbers.push(i);
    };
  };
  return numbers;
};


// result = numbers.join(', ');  //make array a string w/ correct formatting
// WORRY ABOUT THIS AT THE END
