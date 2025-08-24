const fs = require('fs');

function main(filname){
    fs.readFile(filname, 'utf-8', function(err, data){
        console.log(process.argv)
        let total = 0;
        console.log(data)
        for(let i =0; i  < data.length; i++){
            if(data[i] === ' '){
                total++;
            }
        }
        console.log(total+1);
    })
}

main(process.argv[2]);