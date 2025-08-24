const {Router} = require('express');
const { courseModel } = require('../db');
const { userMiddleware } = require('../middleware/user');
const user = require('./user');

const courseRouter = Router();

courseRouter.post('/purchase',userMiddleware,async function(req, res){
const userId = req.userId;
const courseId = req.body.courseId;

await purchaseModel.create({
    userId: userId,
    courseId: courseId
});
res.json({
    message: "purchase successful"
});
});


courseRouter.get('/preview', userMiddleware, async  function(req, res){
 const courses = await courseModel.find();
 res.json(courses);
});

module.exports = {
    courseRouter: courseRouter
}