/**
 * Travis Gautier 2018
 *
 * Abstraction is one of the key concepts of object-oriented programming (OOP) languages. Its main goal is to handle
 * complexity by hiding unnecessary details from the user. (Stackify)
 */

const circle = createCircle(1);


// Use 'let' instead of 'this' for scoping purposes
function Circle(radius){
    let color = 'red';          // value not yet applied to circle, will fall out of scope outside of function
    this.radius = radius;       // 'this' used in constructor
    let defaultlocation = {x:0,y:0};
    let computeOptimumLocation = function(factor){
        //...
    };
    this.draw = function(){
        let x, y;                     //within scope of parent function, within closure of home function
        computeOptimumLocation(0.1);  //closure
        //or we could put default location variable here
        //or we could use this.radius to abstract from parent function
        console.log("draw")
    }
}
const circle = new Circle(10);
circle.draw();