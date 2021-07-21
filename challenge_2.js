
/**
 * ALGORITHMS
 * 
 * Implement an algorithm that can pass the unit tests. 
 * Avoid using built-in functions as much as possible
 * 
 * Difficulty: Medium
 */

function sort (arr) {
    let newArray = [];
    // ONLY CHANGE CODE BELOW
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[min]) {
                min=j; 
            }
         }
         if (min != i) {
            let tmp = arr[i]; 
            arr[i] = arr[min];
            arr[min] = tmp;      
        }
    }
	newArray = arr
    // ONLY CHANGE CODE ABOVE
    return newArray;
}

function require (condition) {
    if (!condition)
        console.warn ("CONDITION WAS NOT MET");
}

require (sort ([]) == []);
require (sort ([1, 2, 3, 4, 5]) == [1, 2, 3, 4, 5]);
require (sort ([1, 3, 4, 2, 5]) == [1, 2, 3, 4, 5]);
