const isPerfectSquare = (num) => {
    if (num < 1) return false;

    for (let i = 1; i * i <= num; i++) {
        if (i * i === num) {
            return true;
        }
    }

    return false;
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(1));
console.log(isPerfectSquare(5));
console.log(isPerfectSquare(4));
