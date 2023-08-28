// array challenges optional assignment

// Write a function that is given an array and each time 
// the value is "food" it should console log "yummy". If "food" 
// was not present in the array console log "I'm hungry" once.
function alwaysHungry(arr) {
var count = 0;
    for (i = 0; i < arr.length; i++) {
    if (arr[i] == "food") {
        console.log("yummy");
        count++
    }
    }
    if (count == 0) console.log("I'm hungry");
}
   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


// Given an array and a value cutoff, return a new array containing only the values larger than cutoff.
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) filteredArr.push(arr[i]);
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// Given an array of numbers return a count of how many of the numbers are larger than the average.
function betterThanAverage(arr) {
    var sum = 0;
    var count = 0;
    for (const element of arr) sum+= element;
    var avg = sum / arr.length;
    for (const element of arr) if (element > avg) count++;
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// Write a function that will reverse the values an array and return them.
function reverse(arr) {
    var j = arr.length - 1;
    for (i = 0; i < j; i++, j--) {
        var storageArr = arr[j];
        arr[j] = arr[i];
        arr[i] = storageArr;
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e", "f"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


// Write a function that will return the fibonacci sequence up to number n  
function fibonacciArray(n) {
    var fibArr = [0, 1];
    switch (true) {
        case 1: return [0];
        case 2: return [0, 1];
        case n > 2: {
            for (i = 2; i < n; i++) fibArr.push(fibArr[i-2] + fibArr[i-1]);
            return fibArr;
        }
        default: return "Invalid entry. Please enter an integer > 0";
    }

}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
