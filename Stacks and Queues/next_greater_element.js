Array.prototype.top = function () {
    return stack[stack.length - 1];
}

let size = 4;
let arr = [1, 3, 2, 4];

let stack = [];
let result = [];

for (let i = 0; i < size; i++){
    if (i == size - 1) {
        result.push(-1);
        stack.push(arr[i]);
    } else {
        while (stack.length != 0 && stack.top() < arr[i]) {
            stack.pop();
        }
        if (stack.length == 0) {
            result.push(-1);
        } else {
            result.push(stack.top());
            stack.push(arr[i]);
        }
    }
}
console.log(result);