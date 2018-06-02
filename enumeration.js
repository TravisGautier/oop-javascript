/**
 * Travis Gautier 2018.
 *
 * In computer programming, an enumerated type (also called enumeration, enum, or factor in the R programming language,
 * and a categorical variable in statistics) is a data type consisting of a set of named values called elements,
 * members, enumeral, or enumerators of the type. (Google)
 *
 * The properties of an enumeration are useful for defining an immutable, related set of constant values that may or
 * may not have a semantic meaning. Classic examples are days of the week (Sunday through Saturday) and school
 * assessment grades ('A' through 'D', and 'F'). Other examples include error status values and states within a
 * defined process. (Stack Exchange)
 */

// Constructor Function
function Circle(radius){
    this.radius = radius;       // 'this' used in constructor
    this.draw = function(){
        console.log("draw")
    }
}
const circle2 = new Circle(10);

//Enumeration Properties
for (let key in circle){            //Enumerate all members in an object
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}
const keys = Object.keys(circle);       // Get all keys in an object
console.log(keys);

if('radius' in circle)                  // Check for existence of a value or property
    console.log('Circle has a radius');
