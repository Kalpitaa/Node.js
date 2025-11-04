import fs from 'fs';

fs.appendFile('fib.txt' ,"\n this is node another line" , ()=>{console.log("completed...")});