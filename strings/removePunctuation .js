function removePunctuation(str) {
    return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "");
}

let text = "Hello, world! How's it going?";
let cleanText = removePunctuation(text);
console.log(cleanText); // Output: "Hello world Hows it going"
