const reveseStr = (str) => {
    let reveseStr='';
    for (let i = str.length-1; i >=0; i--) {
        reveseStr += str[i];
    }
    return reveseStr;
};
let str='Rajesh';
let revStr=reveseStr(str);
console.log(str+": Reversed as :"+revStr);
