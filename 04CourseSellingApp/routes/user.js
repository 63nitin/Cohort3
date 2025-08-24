const {Router} = require('express');
const {userModel, purchaseModel} = require('../db');
const JWT_USER_PASSWORD = 'mansishukla';
const userRouter = Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {userMiddleware} = require('../middleware/user');
const user = require('../middleware/user');
console.log(userMiddleware);


userRouter.post('/signup',async function(req, res){
const {email, password, firstName, lastName} = req.body;
const hashedPassword = await bcrypt.hash(password, 5);
await userModel.create({
    email: email,
    password: hashedPassword,
    firstName: firstName,
    lastName: lastName
});
res.json({
    message: "signup suceeeded"
})
});
userRouter.post('/signin', async function(req, res){
const {email, password, } = req.body;

const user = await userModel.findOne({
    email: email 
});

if(!user){
    return res.status(403).json({
        message: "User not found"
    });
}   
const isPasswordValid = await bcrypt.compare(password, user.password);

if(isPasswordValid){
const token =  jwt.sign({
    id: user._id
 }, JWT_USER_PASSWORD);

 res.json({
    token: token
 })
} else{
    res.status(403).json({
        message: "Incorrect credentials"
    })
}

});

userRouter.post('/purchases',userMiddleware,async function(req, res){
const userId = req.userId;
const {courseId} = req.body;
const purchases = await purchaseModel.create({
    userId: userId,
    courseId: courseId
});
res.json(purchases);
});

userRouter.get('/purchases', userMiddleware, async function(req, res){
const userId = req.userId;
const purchases = await purchaseModel.find({
    userId: userId
});
res.json(purchases);
});

module.exports = {
    userRouter: userRouter
}