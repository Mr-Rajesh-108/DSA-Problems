const primeNum = (num) => {
    let arr = [];   // Empty Array

    for (let i = 2; i <= num; i++) {
        let isPrime = true;

     // Check if 'i' is divisible by any number from 2 to √i
        for (let j = 2; j * j <= i; j++) {
            // If divisible, it's not a prime number
            if (i % j === 0) {
                isPrime = false;
                break; // Exit loop early since we found a divisor
            }
        }

        if (isPrime) {
            arr.push(i);
        }
    }

    // Print all prime numbers up to 'num'
    console.log("Prime numbers:", arr);
};

// Call the function with the value 10
primeNum(100);
