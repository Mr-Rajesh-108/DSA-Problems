function removePunctuation(str) {
    return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "");  //remove all type of Puctuation
}

let text = "Hello, world! How's it going?";
let cleanText = removePunctuation(text);
console.log(cleanText);     // Output: "Hello world Hows it going"
