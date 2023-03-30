const express=require('express')
const router=express.Router()
const {gettickets,createticket,getticket,deleteticket,updateticket}=require('../controllers/ticketcontroller')
const { Protect } = require('../middleware/authmiddleware')






router.route('/').get(Protect,gettickets).post (Protect,createticket);
router.route('/:id').get(Protect, getticket).delete (Protect,deleteticket).put(Protect, updateticket);
module.exports=router;








