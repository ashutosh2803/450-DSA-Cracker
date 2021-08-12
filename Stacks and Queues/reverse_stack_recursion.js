let stack = [4, 3, 2, 1]; // top is 1
let track = stack.length - 1;

function reverseBottom(arr, track) {
    if (track == -1) {
        return
    }
    console.log(arr[track])
    reverseBottom(arr, track - 1);
}

reverseBottom(stack, track)