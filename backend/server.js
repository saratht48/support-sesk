const express=require('express')
const dotenv=require('dotenv').config()//tom use environment variable
const port=process.env.PORT || 8000
const connectdb= require('./config/db')
const {errorhandler}=require('./middleware/errormiddleware')
connectdb();// to connect mongodb
const app=express();
app.use(express.json())// this will allow us to send raw json from frondend to back end
app.use(express.urlencoded({extended:false}))// to access request body
app.get('/',(req,res)=>{
    res.send('hello')
})
app.use('/api/users', require('./routes/userroutes'))
app.use('/api/tickets', require('./routes/ticketroutes'))
/*app.use(errorhandler)*/
app.listen(port,()=>{
    console.log(`server started in ${port}`)
})