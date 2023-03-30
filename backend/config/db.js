const mongoose= require('mongoose')
 const connectdb=async()=>{
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log('mongodb connected')
  }catch(error){
   console.log(`error: ${error.message}`)
   process.exit(1);
  }
 }
module.exports=connectdb