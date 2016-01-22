var numbers = [];
// var result = "";

function pingPong (endNumber) {
  var numbers = [];     // clear the array each time function runs
  for (var i = 1; i <= endNumber; i++) {
    if (i % 3 === 0) {
    numbers.push("ping");
    } else if (i % 5 === 0) {
    numbers.push("pong");
  } else if (i % 15 === 0) {
    numbers.push("pingpong");
    } else {
    numbers.push(i);
    };
  };
  return numbers;
};


// result = numbers.join(', ');  //make array a string w/ correct formatting
// WORRY ABOUT THIS AT THE END
