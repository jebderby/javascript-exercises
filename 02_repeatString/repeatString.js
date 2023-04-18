const repeatString = function(greeting, number) {

// First need to check if the number is negative.
if (number <0) {
    return ('ERROR');
    }

// Second need to initialize a variable with an empty string.
let string = "";

// Third - Use a 'for' loop to repeat 'greeting' 'number' number of times
for (let i = 0; i < number; i++) {
    
    // Add the 'greeting' to the 'string' variable on each iteration of the loop
    string += greeting;
}

// After the loop has been completed, return the 'string' variable. 
return string;

};

// Do not edit below this line
module.exports = repeatString;
