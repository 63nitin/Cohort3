const express = require('express');
const app = express();

let requestCounter = 0;

function requestIncreaser(){
    requestCounter++;
    console.log('Total number of request = ' + requestCounter);

}

function loggerMiddleware(req, res, next){
   console.log("Method is " + req.method);
   console.log("Host is " + req.url);  
   console.log(new Date());
   next();
}

app.use(loggerMiddleware);

app.get("/",function(req, res){
    res.send("app working fine!")
    requestIncreaser()
})

app.get('/multiply', function(req, res){
   const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        answer: a*b
    })
    requestIncreaser();
});


app.get('/add', function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        answer: a+b
    })
    requestIncreaser();
});

app.get('/subtract', function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        answer: a-b
    })
    requestIncreaser();
});

app.get('/divide', function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        answer: a/b
    })
    requestIncreaser();
});


app.listen(3000)