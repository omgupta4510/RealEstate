const express=require('express');
const { shouldBeLoggedIn,shoudlBeAdmin } =require( '../controllers/testControllers');
const jwtverify = require('../middleware/verifyToken');

const router=express.Router();

router.get("/should-be-logged-in",jwtverify,shouldBeLoggedIn);

router.get("/should-be-admin",jwtverify,shoudlBeAdmin);


module.exports=router;