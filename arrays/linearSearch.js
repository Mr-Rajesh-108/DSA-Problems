const linearSearchAll = (arr, value) => {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        // If value matches, push index to result array
        if (arr[i] === value) {
            result.push(i);
        }
    }

    // If no matches found, return -1
    return result.length > 0 ? result : -1;
}

// Define the array
let arr = [1, 3, 4, 5, 7, 6, 8, 3, 9, 0];

// Search for all occurrences of 3
let indices = linearSearchAll(arr, 3);
console.log("All indices of 3:", indices);

// Search for a value not present
let missing = linearSearchAll(arr, 99);
console.log("All indices of 99:", missing);

