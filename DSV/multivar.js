
function add(...args){
    return args.reduce((total, value) => total + value);
}

console.log(add(1,2,3,4,5,6));