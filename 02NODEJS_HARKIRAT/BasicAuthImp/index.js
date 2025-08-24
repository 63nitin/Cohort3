const express = require('express');
const app = express();
const jwt = require('jsonwebtoken')
const JWT_SECRET = "USER_APP";
app.use(express.json());
app.use(express.static(__dirname + '/public'));


const users = [];

function auth(req, res, next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData.username){
        req.username = decodedData.username;
        next()
    }

    else{
        res.json({
            message: "user not founded in"
        })
    }
}

app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/index.html");
})


app.post('/signup', function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "you are signed in!"
    })
});

app.post('/signin', function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for(let i = 0; i < users.length; i++){
        if(users[i].username === username && users[i].password === password){
            foundUser = users[i];
        }
    }

    if(!foundUser){
        res.json({
            message: "Credentials incorrect!"
        })
        return;
    } else{
        const token = jwt.sign({
            username
        },JWT_SECRET );

        res.json({
            token
        })
    }
});

app.get('/me', auth, function(req, res) {
    const foundUser = users.find(user => user.username === req.username);

    if (!foundUser) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json({
        username: foundUser.username,
        password: foundUser.password
    });
});

app.get('/userInfo', auth, function(req, res){
    const foundUser = users.find(user => user.username ===req.username);
    if (!foundUser) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json({
        username: foundUser.username,
        password: foundUser.password
    });
});

app.get('/userInfo', auth, function(req, res){
    const foundUser = users.find(user => user.username ===req.username);
    if (!foundUser) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json({
        username: foundUser.username,
        password: foundUser.password
    });
});
app.listen(3000);