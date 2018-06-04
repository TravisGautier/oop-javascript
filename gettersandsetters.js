/**
 * Travis Gautier 2018.
 */

// Use 'let' instead of 'this' for scoping purposes
function Circle(radius){
    this.radius = radius;       // 'this' used in constructor
    let defaultlocation = {x:0,y:0};

    this.getDefaultLocation = function(){       //Inner function
        return defaultlocation;
    };                //Contains these variables, as well as Circle function variables

    this.draw = function(){
        console.log("draw");
    };

    Object.defineProperty(this, 'defaultLocation',{
    get: function(){
        return defaultlocation;
    },
    set: function(value){

    }
    });
}
const circle = new Circle(10);
circle.draw();