const jwt=require("jsonwebtoken");

const jwtverify=(req,res,next)=>{
    const token=req.cookies.token;
    if(!token)return res.status(401).json({message:"Not Authenticated"});
    jwt.verify(token,process.env.JWT_SECERT,async(err,payload) => {
        if(err)return res.status(403).json({message:"Token is Not valid"});
        req.userId=payload.id;
        req.isAdmin=payload.isAdmin;
        next();
    });
};

module.exports=jwtverify;