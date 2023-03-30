const express=require('express')
const router=express.Router()
const { registeruser,loginuser,getme}=require('../controllers/usercontroller')
const {Protect}=require('../middleware/authmiddleware')

router.post('/',registeruser)
router.post('/login',loginuser)
router.get('/me',Protect,getme)
module.exports=router