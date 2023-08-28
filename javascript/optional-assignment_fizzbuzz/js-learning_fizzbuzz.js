//write a code that goes through each number from 1 to 100
// for each number that is a multiple of 3, print "Fizz"
// of each number that is a multiple of 5, print "Buzz"
// for numbers which are a multiple of bot 3 and 5, print "FizzBuzz"
// all other numbers should just print normally

for (i = 1; i <= 100; i++)
if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
}
else if ( i % 3 == 0 && i % 5 != 0) {
    console.log("Fizz");
}
else if (i % 3 !== 0 && i % 5 == 0) {
    console.log("Buzz");
}
else {
    console.log(i);
}
