/*
*   Since this isnt my first rodeo when it comes to
*   assigning variables values, the main takeaway I found is
*   that how you declare the variable matters (shocking!).
*   Anyway, I found that there are three types of delcaration statements
*   for variables in javascript = ["let", "const", "var"].
*   The delaration which I should most often use is the const
*   declaration. This creates a variable type which is immutable
*   while the let keyword-which is the second most used-creates a mutable
*   variable. This brings us to the final and worst declaration type
*   var... This declaration is simply deprecated and isnt used much anymore.
*/

const name = "Jager";
let age = 16;
var cring = true;   

console.log(name);
console.log(age);
console.log(cring);

console.log(name, "is", age, "years old"); //Concatenation using different variable types