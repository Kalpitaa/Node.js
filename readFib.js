const fs = require('fs');

fs.readFile('fib.txt',isUtf8,(err,data)=>{
    if(err) throw err;
    console.log("reading fib.txt");
    console.log(data);
});

