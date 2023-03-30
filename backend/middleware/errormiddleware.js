const errorhandler=(err,req,res,next)=>{
    
   console.log('hoooooyeh')
    const statuscode=res.statuscode?res.statuscode:500//  res.status is what we set in res.status in the controller.if we didint set any thing then it will be 500
    res.send(statuscode);
    res.json({
        message:err.message,
        stack:process.env.NODE_ENV==='production' ? null: err.stack,
    })
  

}
module.exports={errorhandler}