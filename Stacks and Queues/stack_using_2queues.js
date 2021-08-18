// Input:
// push(2)
// push(3)
// pop()
// push(4)
// pop()
// Output: 3 4

let input = `5
1 2
1 3
2
1 4
2
`
let queue1 = [];
let queue2 = [];
let current_size = 0;

input = input.trim().split("\n");
let operations = +input.shift();

const push = (element) => {
    queue1.push(element);
    current_size++;
}

const pop = () => {
    if (queue1.length == 0) {
        return;
    }
    while (queue1.length != 1) {
        queue2.push(queue1.pop())
    }
}

for (let i = 0; i < operations; i++){
    let temp = input[i].trim().split(" ").map(Number);
    if (temp[0] == 1) {
        
    }
    if (temp[0] == 2) {
        console.log(pop(), " is popped out!");
    }
}