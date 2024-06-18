const jwt=require('jsonwebtoken')
require('dotenv').config();

const jwtAuthMiddleware=(req,res,next)=>{
    
    const token=req.headers.authorization.split(' ')[1];
    if(!token)return res.status(401).json({error:"Bhai ye admi nahi a sakta"});
    try{
        const decode=jwt.verify(token,process.env.JWT_SECERT);
        req.user=decode;
        // console.log("Token is valid");
        next()
    }catch(err){
        console.error(err);
        res.status(401).json({err:"hai kuch to gadbad hai"});
    }

}

//fucntion to generate token
const generateToken=  (userData)=>{
    try{
        return  jwt.sign(userData,process.env.JWT_SECERT);
    }
    catch(err){
        console.log(err);

        return null;
    }
    
}

module.exports={jwtAuthMiddleware,generateToken};