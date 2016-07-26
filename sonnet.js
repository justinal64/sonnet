// Task 1
// Take the contents of the sonnet div and place it in a variable
var divContent = document.getElementById("sonnet").innerHTML;
// console.log(divContent);

// Task 2
// Find and output the starting position of the word "orphans"
console.log(divContent.indexOf("orphans"));

// Task 3
// Output the number of characters in the sonnet
console.log(divContent.length);

// Task 4
// Replace the first occurance of the string "winter" with "yuletide"
var newContent = (divContent.replace(/winter/g, "yuletide"));
// console.log(newContent);

// Task 5
// Replace all occurances of the string "the" with "a large"
newContent = newContent.replace(/the/g, "large");
// console.log(newContent);

// Task 6
// Set the content of the sonnet div with the new string
document.getElementById("sonnet").innerHTML = newContent;

// Original Text
console.log(divContent);