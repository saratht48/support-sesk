const mongoose = require('mongoose')
const ticketschema=mongoose.Schema({
        user:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'User'
        },
        product:{
            type:String,
            required:[true,'please select a product'],
            enum:['iphone','macbook','imac','ipad']
        },
       description:{
            type:String,
            required:[true,'please add a description'],
        },
     status:{
            type:String,
            required:true,
            enum:['new','open','closed'],
            default:'new'
        }
 },{
    timestamps:true,
 })
  module.exports=mongoose.model('Ticket',ticketschema)