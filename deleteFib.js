import fs from 'fs';

fs.unlink('fib.txt', (err)=>{
    if(err) throw err;
    console.log("fib.txt is deleted");
})