// Exercises
function each(array, f) {
  for (var i = 0; i < array.length; i++) {
    f(array[i]);
  }
}

function reduce(array, f, start) {
  var acc = start;
  each(array, function(element) {
    acc = f(acc, element);
  });
  return acc;
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, f) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(f(element, i));
  });
  return acc;
}

// The following function wordLengths accepts a string as a parameter and 
// returns an array of the lengths of each word in the string. Rewrite 
// wordLengths using each (written above for your convenience); that is, 
// replace the for loop.

function wordLengths(string) {
  var acc = [];
  var words = string.split(" ");
  for (var i = 0; i < words.length; i++) {
    acc.push(words[i].length);
  }
  return acc;
}
wordLengths("The quick brown fox jumps over the lazy dog.")
// => [ 3, 5, 5, 3, 5, 4, 3, 4, 4 ]

// wordLengths involves transforming every word into its length, which makes 
// this function an ideal use-case of the map abstraction. Using map 
// (also written above for convenience), rewrite wordLengths (but write a 
// new function, e.g. wordLengthsMap) again -- but this time using map.

// Write a function called wordsLongerThanThree using filter that, given a 
// string as input, returns an array of the words in the original string that 
// are longer than three (have length greater than three).

// Write a function called concat that takes two arrays as parameters and 
// returns an array with all of the elements of the second one added to the 
// first one -- your implementation should use reduce. It should work like 
// this:

function concat(arr1, arr2) {
  // ...
}
concat([1, 2, 3], [4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
concat([], [3, 4, 5]); // => [3, 4, 5]
concat([], []); // => []