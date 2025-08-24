setTimeout(() => {
    console.log("hii");
    setTimeout(() => {
        console.log("hellow");
        setTimeout(() => {
            console.log("hii there");
        }, 5000);
    }, 3000);
}, 1000);