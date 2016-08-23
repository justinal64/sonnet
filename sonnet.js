// Task 1
// Take the contents of the sonnet div and place it in a variable
var divContent = document.getElementById("sonnet").innerHTML;

// Task 4
// Replace the first occurance of the string "winter" with "yuletide"
var newContent = divContent.replace(/winter/, "yuletide");

// Task 5
// Replace all occurances of the string "the" with "a large"
newContent = newContent.replace(/the /gi, " a large "); // gi replaced The or the or tHe etc etc

// Task 6
// Set the content of the sonnet div with the new string
document.getElementById("sonnet").innerHTML = newContent;

// How to use a switch statement
switch(divContent.indexOf("orphans")) {
    case 441:
        console.log("Case = 441");
        break;
    case 442:
        console.log("Case = 442");
        break;
    case 443:
        console.log("Case = 443");
        break;
    default:
        console.log("This is the default answer")
}

// Another way to use a switch statement
switch(true) {
    case divContent.indexOf("orphans") > 410:
        console.log("Case = 441");
        break;
    case divContent.indexOf("orphans") <= 410:
        console.log("Case = 442");
        break;
    case 443:
        console.log("Case = 443");
        break;
    default:
        console.log("This is the default answer")
}









