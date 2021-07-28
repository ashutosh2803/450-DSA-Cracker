let arr = [1000, 11, 445,
    1, 330, 3000];

const minMax = () => {
    let min = arr[0];
    let max = arr[1];
    for (let i = 0; i < arr.length; i++){
        if (max < arr[i]) {
            max = arr[i];
        }
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    console.log('Minimum : ', min);
    console.log('Maximum : ', max);
}

minMax(arr);