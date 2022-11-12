function sumTo(n) {
    result = 0;
    for (let i=1;i<=n;i++){
        result += i;
    }
    return result;
}
console.log(sumTo(4));

function sumTo(x) {
    if (x == 1)
     return x;
    else
     return x + sumTo(x-1);
}
console.log(sumTo(2));