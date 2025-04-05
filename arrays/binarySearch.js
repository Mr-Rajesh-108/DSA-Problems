const binarySearch = (arr, target) => {
    // Define starting and ending indexes
    let start = 0;
    let end = arr.length - 1;

    // Loop until the search space is empty
    while (start <= end) {
        // Find the middle index
        let mid = Math.floor((start + end) / 2);

        // Check if the middle element is the target
        if (arr[mid] === target) {
            return mid; // Found the target at index mid
        }

        // If target is greater, ignore the left half
        else if (arr[mid] < target) {
            start = mid + 1;
        }

        // If target is smaller, ignore the right half
        else {
            end = mid - 1;
        }
    }

    // Target not found in the array
    return -1;
};

// Example usage:
const nums = [1, 3, 5, 7, 9, 11, 13];
const target = 7;

const result = binarySearch(nums, target);
console.log("Index of", target, "is:", result);
