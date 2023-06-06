myValue = 1;

function parentFunction() {
    parentValue = 3;
    console.log("outer: ", parentValue)
    return function innerFunction() {
        parentValue += myValue;
        console.log("inner: ", parentValue);
    }
}

parentFunction()
let result = parentFunction()
result();
result();
result()

//Instantly Invoked Function Expression
//IIFE
//RUNNS RIGHT A WAY
//anonymous
carId = 1
const johnDoe = (()=>{
    carId++
    console.log("outer ", carId);
    
    return ()=>{
        carId++
        console.log("inner ", carId);
    }
})();

johnDoe()
johnDoe()
johnDoe()
johnDoe()