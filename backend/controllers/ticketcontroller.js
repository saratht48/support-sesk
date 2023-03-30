const asyncHandler = require('express-async-handler')
const User=require('../models/usermodel')
const Ticket=require('../models/ticketmodel')

//@ route get/api/tickets/:id
//@access private

const gettickets= asyncHandler(async (req,res)=>{

  const user=await User.findById(req.user.id);
  if(!user){
    res.status(401)
    throw new Error('user not found')
  }
  const tickets=await Ticket.find({user:req.user.id})
  res.status(200).json(tickets)

   
 
    
   })




   const getticket= asyncHandler(async (req,res)=>{

    const user=await User.findById(req.user.id);
    if(!user){
      res.status(401)
      throw new Error('user not found')
    }
    const ticket=await Ticket.findById(req.params.id)
    if(!ticket){
        res.status(404)
        throw new Error('ticket not found')
    }
    if(ticket.user.toString() !==req.user.id){
        res.status(401)
        throw new Error('not autharised')
    }
    res.status(200).json(ticket)
  
     
   
      
     })


     





     
   const deleteticket= asyncHandler(async (req,res)=>{

    const user=await User.findById(req.user.id);
    if(!user){
      res.status(401)
      throw new Error('user not found')
    }
    const ticket=await Ticket.findById(req.params.id)
    if(!ticket){
        res.status(404)
        throw new Error('ticket not found')
    }
    if(ticket.user.toString() !==req.user.id){
        res.status(401)
        throw new Error('not autharised')
    }
    await ticket.remove()
    res.status(200).json({success:true})
     })


    




    
   const updateticket= asyncHandler(async (req,res)=>{

    const user=await User.findById(req.user.id);
    if(!user){
      res.status(401)
      throw new Error('user not found')
    }
    const ticket=await Ticket.findById(req.params.id)
    if(!ticket){
        res.status(404)
        throw new Error('ticket not found')
    }
    if(ticket.user.toString() !==req.user.id){
        res.status(401)
        throw new Error('not autharised')
    }

    const updatedticket=await Ticket.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updatedticket)
  
     
   
      
     })
   const createticket= asyncHandler(async (req,res)=>{
        const{product,description}=req.body
        if(!product || !description){
            res.status(401)
            throw new Error('please add a product and discription')
        }
        const user=await User.findById(req.user.id);
        if(!user){
          res.status(401)
          throw new Error('user not found')
        }
        const ticket=await Ticket.create({
            product,
            description,
            id:req.user.id,
            status:'new'
        })
 
    res.status(201).json(ticket)
     
   
      
     })

     module.exports={
        gettickets,createticket,getticket,deleteticket,updateticket
     }