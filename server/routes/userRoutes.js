const express =require("express");
const { getUsers, getUser, updateUser, deleteUser } = require("../controllers/userController");
const jwtverify = require("../middleware/verifyToken");
const router=express.Router();

router.get("/",getUsers);
router.get("/:id",jwtverify,getUser);
router.post("/:id",jwtverify,updateUser);
router.get("/deleteuser/:id",jwtverify,deleteUser);
module.exports=router;