//Create an array called ages with the values: 3,9,23,64,2,8,28,93.
var ages = [3, 9, 23, 64, 2, 8, 28, 93];

//Subtract the value of the first element from the value of the last element.
console.log(ages[ages.length - 1] - ages[0]);

//Add a new age to the array and repeat the step above
ages.push(97);
console.log(ages);
console.log(ages[ages.length - 1] - ages[0]);

//Create a loop to iterate through the array and calculate the average age
function calculateAverageOfAge(ages) {
   var total = 0;
   var count = 0;

   ages.forEach(function (element, index) {
      total += element;
      count++;
   })
   return total / count;
}
console.log(calculateAverageOfAge(ages));

//Create an array called names with ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//Create a loop to iterate through the array and calculate the average number of letters per name.
for (let i = 0; i < names.length; i++) {
   console.log(names[i].length);
}

//Concatenate all the names together, separated by spaces.
console.log(names.join(' '));

//Access the last element of any array.
console.log(names[names.length - 1]);

//Access the first element of any array.
console.log(names[0]);

//Create a new array called nameLengths.
var nameLengths = [5, 3, 9];

//Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
for (let i = 0; i < names.length; i++) {
   nameLengths.push(names[i].length);
}
console.log(nameLengths);

//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
var total = 0;
for (let i = 0; i < nameLengths.length; i++) {
   total += nameLengths[i];
}
console.log(total);
//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
for (var word = ''; word.length < 10; word += 'Hi') {
   console.log(word);
}
//Write a function that takes two parameters, firstName and lastName, and returns a full name.  The first name first and the last name separated by a space.
function myName(firstName, lastName) {
   console.log(firstName + ' ' + lastName);
}
myName("Lidiia", "Reynolds")
//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
const numbers = [1, 2, 3, 4, 5, 6, 7];
const result = numbers.reduce((sum, num) => sum + num);
console.log(result);
if (result > 100) {
   console.log("True");
} else {
   console.log("False");
}
//Write a function that takes an array of numbers and returns the average of all the elements in the array.
var numberArray = [6, 9, 3, 12, 4];
function calculateAverageOfNumbers(numberArray) {
   var total = 0;
   var count = 0;

   numberArray.forEach(function (element) {
      total += element;
      count++;
   })
   return total / count;
}
console.log(calculateAverageOfNumbers(numberArray));
//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
let arr1 = [2, 5, 9, 15];
let arr2 = [8, 12, 4, 10];
var total = 0;
for (var i = 0; i < arr1.length; i++) {
   total += arr1[i];
}
var avg = total / arr1.length;
console.log(avg);
for (var i = 0; i < arr2.length; i++) {
   total += arr2[i];
}
var avg1 = total / arr2.length;
console.log(avg1);
if (avg > avg1) {
   console.log("True");
} else {
   console.log("False");
}
//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
let isHotOutside;
let moneyInPocket = 15.07;
function willBuyDrink(isHotOutside, moneyInPocket) {
   if (isHotOutside === true && moneyInPocket > 10.50) {
      console.log("We will buy a drink!");
   } else {
      console.log("We don't need it.");
   }
}
willBuyDrink();
//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
//Find the longest word in an array.
var longestWord = ['Hello', 'Mother', 'Republic'];

var lngth = 0;
var longest;

for (var i = 0; i < longestWord.length; i++) {
   if (longestWord[i].length > lngth) {
      var lngth = longestWord[i].length;
      longest = longestWord[i];
   }
}
console.log(longest);