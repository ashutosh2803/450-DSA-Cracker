let stack = [];
const pop = () => {
    return stack.pop();
}
const push = (element) => {
    stack.push(element);
}
const isEmpty = () => {
    if (stack.length == 0) {
        return true;
    } else {
        return false;
    }
}
const findSize = () => {
    return stack.length;
}
let flag = true;
while (flag) {
    console.log("STACK")
    console.log("OPERATIONS")
    console.log("1. POP || 2. PUSH || 3. isEmpty || 4. findSize")
    let input = prompt("Choose a option")
    switch (input) {
        case "1": let popped = pop();
            console.log(`${popped} is popped out of stack!`)
            break;
        case "2": let element = prompt("Enter new element");
            push(element);
            console.log(`${element} is inserted!`)
            break;
        case "3": isEmpty() ? console.log("Stack is empty") : console.log("Stack is not empty")
            break;
        case "4": console.log("Size of Stack is ", findSize());
            break;
        default: console.log("Sorry wrong input, try again!");
   }
}