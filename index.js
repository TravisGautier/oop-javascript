/**
 * Travis Gautier 2018
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

const Circle1= new Function('radius', `
    this.radius - radius;
    this.draw = function(){
        console.log('draw');
    }
`);

Circle.call({}, 1);             //Call does the same as const another = new Circle(1);
Circle.apply({}, [1, 2, 3]);     //Use apply when arrays exist

const another = new Circle(1);

