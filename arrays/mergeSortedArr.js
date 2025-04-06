const mergeSortedArray = (arr1, arr2) => {
    let merged = [];
    let i = 0, j = 0;

    // Merge elements while both arrays have elements
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    // Push remaining elements (if any)
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}

const arr1 = [1, 2,3,4,5,6];
const arr2 = [7,8,9,10];
const mergedArray = mergeSortedArray(arr1, arr2);

console.log("Merged array:", mergedArray);
console.log("Original arr1:", arr1);
console.log("Original arr2:", arr2);

