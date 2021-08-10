// Input:
// push1(2)
// push1(3)
// push2(4)
// pop1()
// pop2()
// pop2()

// Output:
// 3 4 -1

let arr = [];

let size = arr.length;
let top1 = -1;
let top2 = size;

let input = `6
1 1 2
1 1 3
2 1 4
1 2
2 2
2 2
`

input = input.trim().split("\n");
let operations = +input.shift();

function push1(element) {
    if (top1 < top2 - 1) {
        top1++;
        arr[top1] = element;
    } else {
        console.log("Stack Overflow!");
    }
}

function push2(element) {
    if (top1 < top2 - 1) {
        top2--;
        arr[top2] = element;
    } else {
        console.log("Stack Overflow!");
    }
}

function pop1() {
    if (top1 >= 0) {
        console.log(arr[top1]);
        top1--;
    } else {
        console.log("Stack is empty!");
    }
}

function pop2() {
    if (top2 < size) {
        console.log(arr[top2]);
        top2++;
    } else {
        console.log("Stack is empty!");
    }
}

for (let i = 0; i < operations; i++){
    let temp = input[i].trim().split(" ").map(Number);
    
    if (temp[0] === 1) {
        if (temp[1] === 1) {
            push1(temp[2]);
        } else {
            pop1();
        }
    }
    if (temp[0] === 2) {
        if (temp[1] === 1) {
            push2(temp[2]);
        } else {
            pop2();
        }
    }
}

