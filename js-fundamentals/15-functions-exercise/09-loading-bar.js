function printLoadingBar(n) {
    let bar = [];
    let num = n;
    while(num > 0) {
        bar.push("%");
        num -= 10;
    }

    while(bar.length < 10){
        bar.push(".");
    }

    bar = bar.join("");
    
    if(n < 100) {
        console.log(`${n}% [${bar}]`);
        console.log(`Still loading...`);
    } else {
        console.log(`100% Complete!`);
        console.log(`[${bar}]`);
    }
}

printLoadingBar(100);