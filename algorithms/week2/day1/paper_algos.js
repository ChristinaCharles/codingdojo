/* PART 1 */

// function multiply(x,y){
//     console.log(x);
//     console.log(y);
// }
// b = multiply(2,3);
// console.log(b);
// Predicted output: 2 3 undefined

// function multiply(x,y){
//     return x*y;
// }
// b = multiply(2,3);
// console.log(b);
// console.log(multiply(5,2));
// Predicted output: 6 10

// var x = [1,2,3,4,5,10];
// for(var i=0; i<5; i++)
// {
//    i = i + 3; 
//    console.log(i);
// }
// Predicted output: 3 7

// var x=15;
// console.log(x);
// function awesome(){
//     var x=10;
//     console.log(x);
// }
// console.log(x);
// awesome();
// console.log(x);
// Predicted output: 15 15 10 15

// for(var i=0; i<15; i+=2){
//     console.log(i);
//  }
// Predicted output: 0 2 4 6 8 10 12 14

//  for(var i=0; i<3; i++){
//     for(var j=0; j<2; j++){       
     console.log(i*j);
//     }
//  }
// Predicted output: 0 0 0 1 0 2 

// function looping(x,y){
//     for(var i=0; i<x; i++){
//        for(var j=0; j<x; j++){         
//            console.log(i*j);
  } 
//     }
//  }
//  z = looping(3,3);
//  console.log(z);
// Predicted output: 0 0 0 0 1 2 0 2 4

// function looping(x,y){
//     for(var i=0; i<x; i++){
//        for(var j=0; j<y; j++){         
//           console.log(i*j);
//        } 

//     return x*y;
//  }
//  z = looping(3,5);
//  console.log(z);
// Predicted output: 0 0 0 0 0 0 1 2 3 4 0 2 4 6 8 15

/* PART 2 */

/* Print 1 to x */
function printUpTo(x) {
    if (x < 0) {
        console.log("negative number");
        return false
    }
    for (var i = 1; i < 10; i++){
        console.log(i);
    }
} 
  printUpTo(1000000); // should print all the integers from 1 to 1000000
  y = printUpTo(-10); // should return false
  console.log(y); // should print false

 PrintSum */
nction printSum(x) {
    var sum = 0;
    for (var i = 0; i <= x; i++){
        sum += i;
        console.log(i, sum);
    } 
    return sum
}
y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
console.log(y) // should print 32640

/* PrintSumArray */
function printSumArray(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
      sum += x[i];
    
    return sum;
}
console.log(printSumArray([1,2,3])); // should log 6

//Create a function that returns the largest element in a given array.  
//For example largestElement(  [ 1,30,5,7] ) should return 30.

function largestElement(arr) {
    x = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > x) {
            x = arr[i];
        }
    }
    return x;
}
console.log(largestElement([1,30,5,7]));

