let input = `3
abba
abc
appa`

input = input.trim().split("\n");
let count = input.shift();

for (let i = 0; i < count; i++){
    let str = input[i].trim().split("");
    if (str.length % 2 == 0 && str == str.reverse()) {
        console.log(str, "is a palindrome!");
    } else {
        console.log(str, "is not a palindrome!");
    }
}