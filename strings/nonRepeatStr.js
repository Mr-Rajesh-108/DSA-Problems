const nonRepeatStr = (str) => {
    let freq = {};

    // Step 1: Build frequency map
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;     // first freq[char] ---> ( undefine || 0 )
    }

    // Step 2: Find the first character with count = 1
    for (let char of str) {
        if (freq[char] === 1) {
            console.log("First non-repeating character is:", char);
            return char;
        }
    }

    console.log("No non-repeating character found");
    return null;
    
};


let str = 'aabccdeff';
nonRepeatStr(str); 
