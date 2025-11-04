const fs = require("fs");
function fibonacci(n){
    let a = 0,b = 1;
    const series = [a,b];
    for(let i =2;i<n;i++){
        const next = a+b;
        series.push(next);
        a=b;
        b=next;
        
    }
    return series;
}

const fibseries = fibonacci(10).join(",");

fs.writeFile('fib.txt',fibseries,(err)=>{
 if (err) throw err;
 console.log("fibonacci series written to fib.txt");
});