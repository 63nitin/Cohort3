const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors({
   origin: 'http://localhost:3000' // Allow requests from this origin
}));

app.get('/', function(req, res){
    res.send("working fine");
})

app.post('/sum', function(req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    
    res.json({
        answer: a+b
    })
})

app.listen(3000);