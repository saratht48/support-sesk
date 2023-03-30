const mongoose = require('mongoose')
 const userschema=mongoose.Schema({

        name:{
            type:String,
            required:[true,'please add a name']
        },
        email:{
            type:String,
            required:[true,'please add a email'],
            unique:true,
        },
        password:{
            type:String,
            required:[true,'please add a password'],
        },
        isadmin:{
            type:Boolean,
            required:true,
            default:false,
        }
 },{
    timestamps:true,
 })
  module.exports=mongoose.model('User',userschema)