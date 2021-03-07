let average = 0;

function getAverage(a, b) {
    
    average = (a + b) / 2;
    console.log(average);
    return average;
}


const myResult = getAverage(7, 11);

console.log("the average is " + myResult);


function logResult() {
    console.log("the average is " + myResult + " inside the function");
}
logResult();