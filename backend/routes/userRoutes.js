const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET="mysecretkey";

// REGISTER
router.post("/register", async(req,res)=>{

    const existing=await User.findOne({
        username:req.body.username
    });

    if(existing){
        return res.json({
            message:"Email already exists"
        });
    }

    const hash=await bcrypt.hash(
        req.body.password,
        10
    );

    const user=new User({
        username:req.body.username,
        password:hash
    });

    await user.save();

    res.json({
        message:"Account Created"
    });
});


// LOGIN
router.post("/login", async(req,res)=>{

    const user=await User.findOne({
        username:req.body.username
    });

    if(!user){
        return res.json({
            message:"User not found"
        });
    }

    const match=await bcrypt.compare(
        req.body.password,
        user.password
    );

    if(!match){
        return res.json({
            message:"Wrong Password"
        });
    }

    const token=jwt.sign(
        {id:user._id},
        SECRET
    );

    res.json({
        token,
        message:"Login Success"
    });
});

module.exports=router;