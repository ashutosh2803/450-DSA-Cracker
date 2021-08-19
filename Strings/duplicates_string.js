let str = "hello world";
let obj = {};

for (let i = 0; i < str.length; i++){
    if (obj[str[i]] === undefined) {
        obj[str[i]] = 1;
    } else {
        obj[str[i]]++;
    }
}

for (element in obj) {
    if (obj[element] > 1) {
        console.log(element, "-", obj[element]);
    }
}