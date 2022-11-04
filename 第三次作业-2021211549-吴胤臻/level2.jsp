let arr = [1, [2, [3, 4]]];
function flatten(arr) {
    return arr.reduce(function(pre, cur){
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
    }, [])
}
console.log(flatten(arr));

let arr1 = [1, [2, [3, 4]]];
function flatten(arr1) {
    while (arr1.some(i => Array.isArray(i))) {
        arr1 = [].concat(...arr1);
    }
    return arr1;
}
console.log(flatten(arr1)); 