const prisma = require("../lib/prisma");
const bcrypt=require("bcrypt");
const getUsers=async(req,res)=>{
    try{
        
        const users=await prisma.user.findMany();
        res.status(200).json(users);
    }catch(err){
        console.log(err);
        res.status(50).json({message:""});
    }
}
const getUser=async(req,res)=>{
    const id=req.params.id;
    const tokenUserId=req.userId;
    
    if(id!=tokenUserId)return res.status(403).json({message:"Not Authorised"});
    try{
        const users=await prisma.user.findUnique({
            where:{id:id}
        });
        res.status(200).json(users);
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Failed to get user"});
    }
}
const updateUser=async(req,res)=>{
    const id=req.params.id;
    const tokenUserId=req.userId;
    const {password:userPassword,...info}=req.body;
    if(id!=tokenUserId)return res.status(403).json({message:"Not Authorised"});
    let updatedPassword=null;
    try{
        if(userPassword){   
            updatedPassword=await bcrypt.hash(userPassword,10);
        }
        const updatedUser=await prisma.user.update({
            where:{id},
            data:{
                ...info,
                ...(updatedPassword && {password:updatedPassword}) 
            },
        });
        console.log(updatedUser);
        res.status(200).json(updatedUser);
    }catch(err){
        console.log(err);
        res.status(500).json({message:""});
    }
}
const deleteUser=async(req,res)=>{
    const id=req.params.id;
    try{
        const users=await prisma.user.findMany();
        res.status(200).json(users);
    }catch(err){
        console.log(err);
        res.status(500).json({message:""});
    }
}

module.exports={getUsers,getUser,updateUser,deleteUser};