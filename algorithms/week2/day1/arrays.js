/* 1 */
// Given an array and a value Y, count and print the number of array values greater than Y.
function countGreater(arr, y) {
    num = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            num++;
        }
    }
    console.log(num);
}
countGreater([1, 2, 3, 4, 5, 6, 7], 4);

/* 2 */
// Given an array, print the max, min and average values for that array.
function maxMinAvg(arr) {
    max = arr[0];
    min = arr[0];
    sum = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        else if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i];
    }
    console.log(max, min, sum / arr.length);
}
maxMinAvg([1, 2, 3, 4, 5, 6]);

/* 3 */
// Given an array of numbers, create a function that returns a new array where 
//negative values were replaced with the string ‘Dojo’.   For example,
//replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].
function negToDojo(arr) {
    newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            newArr.push("Dojo");
        }
        else
            newArr.push(arr[i]);
    }
    return newArr;
}
console.log(negToDojo([1, 2, 3, -1, 2, -2]));

// Given array, and indices start and end, remove vals in that index range, working 
//in-place (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) 
//should return [20,30,70].

function removeVals(arr, start, end) {
    diff = end - start + 1;
    arr.splice(start, diff);
    return arr;
}

console.log(removeVals([20, 30, 40, 50, 60, 70], 2, 4));