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

let top1 = 0;
let limit1 = arr.length - 1 / 2;
let top2 = 0;
let limit2 = arr.length - 1;

const push1 = (element) => {
    if (top1 > limit1) {
        arr[++top1] = element;
    } else {
        console.log("Stack1 Overflow!");
    }
}

const push2 = (element) => {
    if (top2 > limit2) {
        console.log("Stack2 Overflow!");
    } else {
        arr[++top2] = element;
    }
}

const pop1 = () => {
    
}

const pop2 = () => {

}

for (let i = 0; i < operations; i++){
    let temp = input[i].trim().split(" ").map(Number);
    switch (temp[0]) {
        case 1: 
            break;
        case 2: break;
        default: break;
    }
}

console.log(arr);

