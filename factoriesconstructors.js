/**
 * Travis Gautier 2018.
 *
 * In object-oriented programming (OOP), a factory is an object for creating other objects – formally a factory is a
 * function or method that returns objects of a varying prototype or class[1] from some method call, which is assumed
 * to be "new".[a] More broadly, a subroutine that returns a "new" object may be referred to as a "factory", as in
 * factory method or factory function. This is a basic concept in OOP, and forms the basis for a number of related
 * software design patterns. (Wikipedia)
 *
 *In object-oriented programming (OOP), a factory is an object for creating other objects – formally a factory is a
 * function or method that returns objects of a varying prototype or class[1] from some method call, which is assumed
 * to be "new".[a] More broadly, a subroutine that returns a "new" object may be referred to as a "factory", as in
 * factory method or factory function. This is a basic concept in OOP, and forms the basis for a number of related
 * software design patterns. (Wikipedia)
 */

// Factory Function
function createCircle(radius){
    return {                   // 'return' used in factories
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}
const circle = createCircle(1);

// Constructor Function
function Circle(radius){
    this.radius = radius;       // 'this' used in constructor
    this.draw = function(){
        console.log("draw")
    }
}
const circle2 = new Circle(10);

const Circle1= new Function('radius', `
    this.radius - radius;
    this.draw = function(){
        console.log('draw');
    }
`);

Circle.call({}, 1);             //Call does the same as const another = new Circle(1);
Circle.apply({}, [1, 2, 3]);     //Use apply when arrays exist

const another = new Circle(1);