const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send("Hellow Mansi!");
})

app.listen(3000);