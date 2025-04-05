const primeNum = (num) => {
    let arr = [];   // Empty Array

    for (let i = 2; i <= num; i++) {
        let isPrime = true;

        for (let j = 2; j * j <= i; j++) {         // Check if 'i' is divisible by any number
            if (i % j === 0) {          // If divisible, it's not a prime number
                isPrime = false;
                break; // Exit loop early since we found a divisor
            }
        }
        if (isPrime) {
            arr.push(i);
        }
    }

    console.log("Prime numbers:", arr);
};
primeNum(100);
