function divideResults(n, m) {
    let fact1 = factorial(n);
    let fact2 = factorial(m);

    let result = (fact1 / fact2).toFixed(2);
    console.log(result);
}

divideResults(5, 2);


function factorial(n) {
    
    let factorial = 1;
    while (n >= 1) {
        factorial *= n;
        n--;
    }

    return factorial;
}