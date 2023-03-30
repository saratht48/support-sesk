const asyncHandler = require('express-async-handler')
const User=require('../models/usermodel')

const Protect=asyncHandler(async(req,res,next)=>{
    if(req.body.id){
        try{
            req.user=await User.findById(req.body.id).select('-password')
            next()
        }catch(err){
            console.log(err)
            res.status(401).json({message:'not authorized'})
        } 
    }
    if(!req.body.id){
        res.status(401)
        throw new Error('not authorized')
    }

})
module.exports={Protect}
