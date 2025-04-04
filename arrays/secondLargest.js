const secondLargest = (arr) => {
    if (arr.length < 2) return null; // Not enough elements

    let firstLargestNumber = -Infinity;
    let secondLargestNumber = -Infinity;

    arr.forEach(element => {
        if (element > firstLargestNumber) {     
            secondLargestNumber = firstLargestNumber;
            firstLargestNumber = element;
        } else if (element > secondLargestNumber && element < firstLargestNumber) { 
            secondLargestNumber = element;
        }
    });

    return secondLargestNumber === -Infinity ? null : secondLargestNumber;
};

// Example usage:
console.log(secondLargest([10, 20, 4, 45, 99, 99])); // Output: 45
console.log(secondLargest([5])); // Output: null
console.log(secondLargest([])); // Output: null
console.log(secondLargest([5, 5, 5, 5])); // Output: null
