const express =require("express");
const  postRoute = require("./routes/postRoutes");
const  authRoute = require("./routes/authRoutes");
const cookieParser=require("cookie-parser");
const app=express();

// app.use(cookieParser);
app.use(express.json());
app.use("/post",postRoute);
app.use("/auth",authRoute);
app.listen(3000,()=>{
    console.log("Server is Live");
})