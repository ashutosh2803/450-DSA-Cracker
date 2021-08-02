let queue = [];

const enqueue = (element) => {
    queue.push(element);
}
const dequeue = () => {
    if (queue.length == 0) {
        return false;
    } else {
        queue.shift();
        return true;
    }
}
const isEmpty = () => {
    if (queue.length == 0) {
        return true;
    } else {
        return false;
    }
}
const findSize = () => {
    return queue.length;
}
let flag = true;
while (flag) {
    console.log("QUEUE")
    console.log("OPERATIONS")
    console.log("1. DEQUEUE || 2. ENQUEUE || 3. isEmpty || 4. findSize || 5. QUIT")
    let input = prompt("Choose a option")
    switch (input) {
        case "1": let dequeued = dequeue();
            console.log(`${dequeued} is dequeued from queue`)
            break;
        case "2": let element = prompt("Enter new element")
            enqueue(element);
            break;
        case "3": isEmpty ? console.log("Queue is Empty!") : console.log("Queue is not Empty!")
            break;
        case "4": console.log(findSize());
            break;
        case "5": break;
        default: console.log("Sorry wrong input, try again!");
    }
}