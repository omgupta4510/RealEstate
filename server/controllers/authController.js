const bcrypt=require("bcrypt");
const prisma=require("../lib/prisma");
const {jwtAuthMiddleware,generateToken}=require("../jwt");
// console.log(prisma);
// import { use } from "../routes/authRoutes";

const register=async (req,res)=>{
    try{
        const {username,email,password}=await req.body;
        const hashedPassword=await bcrypt.hash(password,10);
        console.log(hashedPassword);

        const newUser=await prisma.user.create({
            data:{
                username,
                email,
                password:hashedPassword
            },
        });
        res.status(201).json({message:"User created succesfully"});
    }catch(err){
        console.log(err);
        res.status(500).json("Internal Sevrer Error");
    }
}

const login=async (req,res)=>{
    const {username,password}=req.body;
    try{
        const user=await prisma.user.findUnique({
            where:{username},
        });
        // console.log("done");
        if(!user)return res.status(403).json({message:"User is invalid"});
        
        const isPasswordValid=await bcrypt.compare(password,user.password);
        if(!(isPasswordValid))return res.status(401).json({message:"Invalid Credentials"});
        const token=generateToken(user.id);
        const age=1000*60*60*7*24;
        res.cookie("token",token,{
            httpOnly:true,
            maxAge:age
        }).status(200).json({message:"Success"});
        
        // res.setHeader("Set-Cookie","test="+"myValue").json("success");
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Failed to login!"});
    }
}

const logout=(req,res)=>{
    try{
        res.clearCookie("token").status(200).json({message:"Logout Succesfull"});
    }catch(err){
        res.status(501).json("Intern server error");
    }
 }

module.exports={register,login,logout};