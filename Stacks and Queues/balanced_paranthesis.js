let input = `3
[{()}]
[{())]
{}
`
input = input.trim().split("\n");
let operations = +input.shift();

const checkBalancedParanthesis = (str) => {
    
}

for (let i = 0; i < operations; i++){
    let str = input[i].trim();
    checkBalancedParanthesis(str);
}