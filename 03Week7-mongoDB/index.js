const express = require('express');;
const app = express();
app.use(express.json());
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret_key'; 
const mongoose = require('mongoose');
const { UserModel, TodoModel } = require('./db');



mongoose.mongoose.connect('mongodb://localhost:27017/todoapp')
app.post('/signup', async function(req, res){

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email: email,
        password: password,
        name: name
    });

    res.json({
        message: 'User created successfully'
    })

});

app.post('/signin', async function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
         email: email,
         password: password
    });
    console.log(user);

    if (user) {
        const token = jwt.sign({
            id: user._id.toString(),
        }, JWT_SECRET);
        res.json({
            token: token,
        });
    } else {
        res.status(401).json({
            message: 'Invalid email or password'
        });
    }
    
});

app.post('/todo', auth, async function(req, res){
    const userId = req.userId;
    const title = req.body.title;
   await TodoModel.create({
        title: title,
        userId: userId
    });

    res.json({
        userId: userId,
    })
});
app.get('/todos', auth, async function(req, res){
    const userId = req.userId;
    const todos = await TodoModel.find({ userId: userId });
    res.json({
        todos: todos,
    });
});

function auth(req, res, next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);
    if(decodedData){
        req.userId = decodedData.id;
        next();
    } else {
        res.status(401).json({
            message: 'Unauthorized'
        });
    }
}

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});