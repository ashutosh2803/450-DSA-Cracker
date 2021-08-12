let input = `3
[{()}]
[{())]
{}
`
input = input.trim().split("\n");
let operations = +input.shift();

const checkBalancedParanthesis = (str) => {
    if (str.length == 0) {
        return false;
    }
    
}

for (let i = 0; i < operations; i++){
    let str = input[i].trim();
    checkBalancedParanthesis(str);
}