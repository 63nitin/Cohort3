// promises

function doAsync(resolve){
    
    setTimeout(resolve, 3000);
    console.log(resolve)
}

function callback(){
    console.log("Run after 3 seconds");
}

const p = new Promise(doAsync).then(callback);
