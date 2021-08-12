let str = "GeeksforGeeks";
str = str.split("");
let stack = [];

for (let i = str.length - 1; i >= 0; i--){
    stack.push(str[i]);
}

console.log(stack.join(""));