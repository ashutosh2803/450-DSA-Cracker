let arr = [1, 2, 3];
let arr1 = [1, 2, 4, 5];

const reverseArr = (arr) => {

    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }

    return arr;
}

console.log(reverseArr(arr).join(" "));
console.log(reverseArr(arr1).join(" "));