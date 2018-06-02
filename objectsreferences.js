/**
 * Travis Gautier 2018.
 */

//Primitives are independent
// Primitives are coped by their value, objects are copied by their reference.
let x =10;
let y = x;
x = 20;                        //x will change to 20, y stays at 10
x.value = 20;                  // value will change both x and y


let number = 10;               //Primitives are copied by value
function increase(number){
    number++;                  //Increased number to 11, but goes out of scope after function
}
increase(number);
console.log(number);           //Will return 10

let obj = {value:10};          //Reference will take the object value
function increaseref(obj){
    obj.value++                //Increases number to 11, changes the value beyond the function
}
increase(obj);
console.log(obj);              //Will return 11
