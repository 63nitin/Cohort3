const { Router } = require("express");
const {adminModel, courseModel} = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const JWT_ADMIN_PASSWORD = "mansiiii";
console.log(JWT_ADMIN_PASSWORD)
const {adminMiddleware} = require('../middleware/admin');


const adminRouter = Router();

adminRouter.post('/signup', async function(req, res){
   const {email, password, firstName, lastName} = req.body;

   const hashedPassword = await bcrypt.hash(password, 5);

await adminModel.create({
    email: email,
    password: hashedPassword,
    firstName: firstName,
    lastName: lastName
});
res.json({
    message: "signup suceeeded"
})
});

adminRouter.post('/signin', async function(req, res){
   const {email, password, } = req.body;

const admin = await adminModel.findOne({
    email: email,
});

if(admin){
const isPasswordValid = await bcrypt.compare(password, admin.password);
if(isPasswordValid){
const token =  jwt.sign({
    id: admin._id
 }, JWT_ADMIN_PASSWORD);

 res.json({
    token: token
 })
} else{
    res.status(403).json({
        message: "Incorrect credentials"
    })
}
}
})
adminRouter.put('/course',adminMiddleware,async function(req, res){
   const adminId = req.userId;

   const {title, description, imageUrl, price, courseId} = req.body;

   const course = await courseModel.updateOne({
    _id: courseId,
    creatorId: adminId
   },{
    title,
    description,
    imageUrl,
    price,
   });
   res.json({
    message: "Course updated",
    courseId: courseId
   });
});

adminRouter.post('/course', adminMiddleware, async function(req, res){
   const adminId = req.userId;

   const {title, description, imageUrl, price} = req.body;
   
 const course =  await courseModel.create({
    title,
    description,
    imageUrl,
    price,
    creatorId:adminId
   });

   res.json({
    message: "Course created",
    courseId: course._id
   })
   
});

adminRouter.get('/course/bulk',adminMiddleware,async function(req, res){
   const adminId = req.userId;

    const courses = await courseModel.find({
       creatorId: adminId
    });
   res.json({
    courses: courses
   });
});

adminRouter.get('/course', adminMiddleware, async function(req, res){
   const adminId = req.userId;
   const courses = await courseModel.find({
    creatorId: adminId
   });
   res.json({
    courses: courses
   });
})

module.exports = {
    adminRouter: adminRouter
}
