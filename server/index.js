const express =require("express");
const  postRoute = require("./routes/postRoutes");
const  authRoute = require("./routes/authRoutes");
const  testRoute=require("./routes/testRoutes.js");
const userRoute=require("./routes/userRoutes.js");
const cookieParser=require("cookie-parser");
const cors=require("cors");
require('dotenv').config();


const app=express();
console.log("hare krishna");
app.use(cors({origin:true,credentials:true}) );
app.use(cookieParser());
app.use(express.json());
app.use("/post",postRoute);
app.use("/auth",authRoute);
app.use("/test",testRoute);
app.use("/user",userRoute);
app.listen(3000,()=>{
    console.log("Server is Live");
})