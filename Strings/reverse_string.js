// Do not allocate extra space for another array. 
// You must do this by modifying the input array in -place with O(1) extra memory.

let str = ["h", "e", "l", "l", "o"];
let end = str.length - 1;
let start = 0;

while (end >= start) {
    let temp = str[start];
    str[start] = str[end];
    str[end] = temp;
    end--;
    start++;
}

console.log(str);