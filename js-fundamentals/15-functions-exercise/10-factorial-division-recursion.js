function divideResults(n, m) {
    let fact1 = factorial(n);
    let fact2 = factorial(m);

    let result = (fact1 / fact2).toFixed(2);
    console.log(result);
}

divideResults(5, 2)

// Recursion
function factorial(x) {

    if (x === 0) {
        return 1;
    } else if (x > 0) {
        return x * factorial(x - 1);
    }
}

console.log(factorial(4));
