const jwt=require("jsonwebtoken");
require('dotenv').config();

const shouldBeLoggedIn=(req,res)=>{
    const token=req.cookies.token;
    console.log(req.userId);
    return res.status(200).json({message:"You are Authenticated"});

}
const shoudlBeAdmin=async (req,res)=>{
    try {
        if(!(await req.isAdmin))return res.status(403).json({ message: "Not an Admin" });
        return res.status(200).json({ message: "You are Authenticated" });
      } catch (err) {
        console.log(err);
        return res.status(500).json("Internal Server Error");
      }
    
}

module.exports={shouldBeLoggedIn,shoudlBeAdmin};