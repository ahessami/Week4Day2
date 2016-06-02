/*
  ===================================================================
                    INTRODUCTION TO CLOSURES 
  ===================================================================
*/

function print(x) {
  console.log(x);
}
// Exercises
function makeAccount(initial) {
  var balance = initial;

  return function(amount) {
    if (balance - amount >= 0) {
      balance = balance - amount;
      return "Here’s your money: $" + amount;
    }
    return "Insufficient funds.";
  };
}

//Basic Requirements

// Let's make a counter using closures. For our purposes, a counter is 
// simply a function that, when invoked, returns a number that is one 
// higher than it used to be. For example, this is the behavior that 
// we want:

counter(); // => 1
counter(); // => 2
counter(); // => 3

// We could implement this using the global scope like this:

var count = 0;

function counter() {
  count = count + 1;
  return count;
}

// But now that we know about closures, we can do something way cooler. 
// Finish the implementation of makeCounter below so that we can make 
// multiple counters, each with their own internal count using closures.
/*
function makeCounter() {
  // YOUR CODE HERE
  var counter = 0;
  return function myCount() {
    return counter = counter + 1;
  }
}
*/

function makeCounter(initial) {
  // YOUR CODE HERE
  var counter = initial;
  function myCount() {
    return counter = counter + 1;
  }

  return myCount;
}

var counter1 = makeCounter();
var counter2 = makeCounter();
counter1(); // => 1
counter1(); // => 2
counter2(); // => 1
counter1(); // => 3
counter2(); // => 2

// Update makeCounter so that, instead of always starting from zero, 
// you can start from any number, e.g.:

var counter = makeCounter(100);
counter(); // => 101;

// One way we can use closures is as functions that construct other 
// functions. Consider the numerous examples of exponentiation functions 
// that we've created, e.g. square and cube. The following function 
// pow is incomplete:

function pow(exponent) {
//   return function(???) {
//     return ???
//   }
    
    function powThis(base) {
      return Math.pow(base, exponent);
    }

    return powThis;
}

// Fill in the ??? so that it works like this:

var square = pow(2);
var cube = pow(3);
var power4 = pow(4);

square(5); // => 25
cube(3); // => 27
power4(4); // => 256

/*
  ===================================================================
                    CLOSURES ADDING METHODS
  ===================================================================
*/

// Exercises

function makeAccount(initial) {
  var balance = initial;

  return {
    withdraw: function(amount) {
      if (balance - amount >= 0) {
        balance = balance - amount;
        return "Here’s your money: $" + amount;
      }
      return "Insufficient funds.";
    },
    deposit: function(amount) {
      balance = balance + amount;
      return "Your balance is: $" + balance;
    }
  };
}

// Basic Requirements

// Modify the makeAccount function from the lecture so that the 
// returned object contains an additional key called checkBalance, 
// the value of which is a function that takes no arguments and 
// returns a string representing the current balance. You should be 
// able to use it like this:

var account = makeAccount(100);
account.checkBalance(); // => "Your balance is: $100"
account.deposit(50);
account.checkBalance(); // => "Your balance is: $150"

// Let's revisit the counter exercise. Currently, makeCounter only 
// allows us to count up -- what if we want to count down too? Modify 
// makeCounter so that it returns an object that contains two keys: 
// up and down, each of which have functions as values. up should 
// make the count increase, and down should make the count 
// decrease:

function makeCounter(init) {
  // YOUR CODE HERE
  var counter = init;
  return {
    up: function() {
      return counter = counter + 1;
    },
    down: function() {
      return counter = counter - 1;
    },
    reset:function() {
      return counter = init;
    }
  }

}

var counter = makeCounter(0);
counter.up(); // => 1
counter.up(); // => 2
counter.down(); // => 1
counter.down(); // => 0

// Give your counter a reset capability as well, that resets the count 
// back to its initial value.

var counter = makeCounter(5);
counter.up(); // => 6
counter.up(); // => 7
counter.reset(); // => 5
// More Practice
// Closures

// Remember the guessing game from the first week? When we wrote the 
// first version of the game, we didn't know about closures and stored 
// all of our state (variables) in the global scope. Rewrite the 
// guessing game to take advantage of closures so that you can create 
// multiple games. Here is some starter code:

function randInt(n) {
  return Math.floor(Math.random() * (n + 1));
}

var upperBound = 5;

function guessMyNumber(n) {
  if (n > upperBound) {
    return "Out of bounds! Please try a number between 0 and " + upperBound + ".";
  } else if (n === randInt(upperBound)) {
    return "You guessed my number!";
  }
  return "Nope! That wasn't it!";
}

// You will need to define a function makeGame, and at the minimum, 
// you should be able to play the game like this:

var game = makeGame(10); // 10 is the upper bound
game(2); // => "Nope! That wasn't it!"
game(7); // => "Nope! That wasn't it!"
game(5); // => "You guessed my number!"
// Ways to improve the game include:

// A way to "give up" and have the game reset, e.g. game.giveUp().

// Keep track of how many guesses have been made, and provide a way to 
// access them, e.g. game.numGuesses().

// See the original exercise for the rest of the improvements!

// Higher Order Functions

// Write a function someEven that, given an array of numbers as an 
// argument, returns true if at least one of the numbers is even. Use 
// reduce to complete this exercise.

function someEven(numbers) {
  // YOUR CODE HERE
}
someEven([1, 3, 5, 7, 8]); // => true
someEven([1, 3, 5, 7]); // => false

// Write the functions someOdd, somePositive, and someNegative that 
// work similarly to someEven.

// Using reduce, write a function some that accepts an array as its 
// first parameter, and a predicate (a function that returns true or 
// false) as its second parameter. If the predicate returns true for 
// any of the elements in the array, some should return true.

// Using some, determine if some of the words in the following string 
// have a length greater than 4:

// "The quick brown fox jumps over the lazy dog."

// Advanced

// Most banks keep records of the transactions that take place in an 
// account. Implement a transaction log that keeps track of all 
// transactions that occur in a given account.

// A single transaction should probably be represented by an object, 
// for instance:

// {type: "deposit", amount: 100, before: 110, after: 210, status: "approved"}
// {type: "withdrawal", amount: 5000, before: 210, after: 210, status: "denied"}

// Modify the return value of your makeAccount function to include the 
// capability to view the last n transactions with a function called 
// transactionHistory:

var account = makeAccount(100);
// ...
account.transactionHistory(2); // => [{...}, {...}]
// Other ideas to try include:

// Implement a way to get the last n withdrawals or deposits

//Implement a function that determines the average withdrawal and 
// deposit amounts.
// Learn about the JavaScript Date object (try typing new Date() 
// into a console) and incorporate time into the transactions.

