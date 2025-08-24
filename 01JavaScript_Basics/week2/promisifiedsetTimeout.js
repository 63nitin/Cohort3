const { time } = require("console");

function promisifiedSetTimeOut(time){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve();
        }, time);
    })
}

function callback(){
    console.log("call back call after 3000 ms")
}

promisifiedSetTimeOut(3000).then(callback)