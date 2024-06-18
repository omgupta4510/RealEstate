const express =require("express");
const router =express.Router();

router.get("/test",(req,res)=>{
    console.log("router works");
    res.send("Hare Krishna");
})

module.exports=router;