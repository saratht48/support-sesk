const asyncHandler = require('express-async-handler')
/*const bcrypt=require('bcryptjs')*/
const User=require('../models/usermodel')

const registeruser=asyncHandler(async (req,res)=>{

  const {email,password,name}=req.body;
  if(!email || !password || !name){
     // return  res.status(400).json({message:'please include all fiels'});
    res.status(400).json({message:'PLESE INCLUDE ALL FIELDS'})
  }
  debugger
  const userexists=await User.findOne({email:email})
  if(userexists){
    res.status(400)
    throw new Error('user already exists')
  }
 /* const salt=await bcrypt.genSalt(10)
  const hashedpassword=await bcrypt.hash(password,salt)*/
  const user =await User.create({
    name,
    email,
    password
  })
  console.log('new user')
  console.log(user)
  if(user){
    res.status(201).json({
        _id:user._id,
        name:user.name,
        email:user.email
    })}
    else{
        res.status(400)
        throw new Error('invalid user data')
    }
  }

)
const loginuser= asyncHandler(async (req,res)=>{
   const{email,password}=req.body;
   console.log(email);
   console.log(password);
   const user= await User.findOne({email:email})   
   console.log(user) ;
   //check user and password
   if(user && password===user.password){
    res.status(200).json({
      _id:user._id,
      name:user.name,
      email:user.email
  })
   }else{
    res.json({message:'invalid password or user name'})
   }
  })


  // get current user

  const getme= asyncHandler(async (req,res)=>{

    const user={
      id:req.user._id,
      email:req.user.email,
      name:req.user.email,
    }
  res.status(200).json(user)
   
 
    
   })

  module.exports={
    registeruser,loginuser,getme
  }