const express= require("express")
const adminController = require("../controller/adminController")
const router_admin= express.Router()



router_admin.post("/login",adminController.adminLogin)



module.exports=router_admin