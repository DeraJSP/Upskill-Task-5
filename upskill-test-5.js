/*
Create a function that will be able to convert figures 
from Fahrenheit to Celsius.
*/

function fartocel(number) {
return Math.round((number - 32) * 5 / 9) + ' centigrade';
}

fartocel(97); // 36 centigrade


// Create a function that will calculate the average of numbers in an array.

function avgOfArray(numbersInArray) {
	let avg = 0;
	for (let i = 0; i < array.length; i++) {
		avg += array[i] / 2;
	}
	return avg;
}

const numbersInArray = [5, 4, 1, 3, 16];

avgOfArray(numbersInArray); // 14.5


/*
Create a function that checks if a number, n is divisible by two 
numbers x and y. All inputs are positive, non-zero digits.
*/

function divCheck(n, x, y) {
	if (n % x === 0 && n % y === 0) {
	return 'It is divisible';	
	} else {
		return 'It is not divisible';
	}
}

divCheck(21, 3, 7); // It is divisible

// Create a function that will output the first 100 prime numbers.

function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			return false
		}
	}

	return true;
}

function primeNumbers() {
	
	for (let i = 2; i < 100; i++) {
		let primeArray = [];
		if (isPrime(i) === false) {
			continue;
		}
		else (isPrime(i) === true) 
		{
		console.log(i);
		}
	}
}

primeNumbers(); /* 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 */


/*
Create a function that will return a boolean specifying if a number 
is a prime number.
*/

function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			return false
		}
	}

	return true;
}

isPrime(4) // false


/*
Create a function that receives an array of numbers of diverse 
numbers and returns an array containing only positive numbers.
*/

let numArray = [4, -5, 7, -1, 3]

function posArray(numArray) {
	for (let i = numArray.length; i >=0; i--) {
  if (numArray[i] > 0) {
    continue
  }
  
  else {
   numArray.splice(i, 1)
  }
}
  return numArray;
}

posArray(numArray) // [4, 7, 3]


/*
Write a program that prints the numbers from 1 to 100. But for 
multiples of 3 prints "Fizz" instead of the number and for the 
multiples of 5 prints "Buzz". For numbers which are multiples of 
both 3 and 5 prints "FizzBuzz".
*/

const fizzbuzz = [];
for (let i = 1; i < 101; i++) {
switch (true) {
case (i % 3 === 0):
fizzbuzz.push('Fizz');
break;

case (i % 5 === 0):
fizzbuzz.push('buzz');
break;

case (i % 3 === 0 && i % 5 === 0):
fizzbuzz.push('Fizzbuzz');
 break;

default:
fizzbuzz.push(i);

  }
}

fizzbuzz; // [ 1, 2, "Fizz", 4, "buzz", "Fizz", 7, 8, "Fizz", "buzz", … "buzz"]


/*
The marketing team is spending way too much time typing in hashtags. 
Let’s create a hashtag generator for them, our hashtag generator will 
meet the following criteria; 
It must start with a hash symbol, #.
Ignore all spaces in the input.
All words must have their first letter capitalized.
If the final result is going to be longer than 140 characters, it should 
return false.
If the input or result is an empty string, it should return false.
*/

const words = 'pride in prejudice';

let newCap = []
let caps = words.split(' ');
for (let cap of caps) {
  newCap.push(cap.charAt(0).toUpperCase() + cap.slice(1))
}
newCap.unshift('#');
const newString = newCap.join('');

switch (true) {
case (newString === '' || newString.length > 140 || words === ''):
console.log(false);
break;

default:
newString; // #PrideInPrejudice
}
