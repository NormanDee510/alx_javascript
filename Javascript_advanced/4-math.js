function divideBy(firstNumber) {
    return function (secondNumber){
        return (firstNumber / secondNumber);
    }
}

function addBy(firstNumber) {
    return function (secondNumber){
        return firstNumber + secondNumber;
    }
}

var addBy100 = addBy(100);
var addBy1000 = addBy(1000);
var divideBy10 = divideBy(10);
var divideBy100 = divideBy(100);

console.log(addBy100(20));        
console.log(divideBy10(20));      
console.log(divideBy100(200));    
console.log(addBy1000(20));       
