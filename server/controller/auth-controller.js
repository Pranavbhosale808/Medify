const express = require('express');
const router  = express.Router();
const User = require('../models/user-model');
const bcrypt = require('bcryptjs');



const home = (req,res)=>{
    try {
        res.status(200).send("This is from controllers home page")
    } catch (error) {
        console.log(error)
    } 
}

const register =async (req,res)=>{
    try {
        
        const {username,email,phone,password} = req.body;
        const userExits = await User.findOne({email});

        // hashing a password
        // const salt = 10;
        // const hash_password = await bcrypt.hash(password,salt);

        if(userExits){
            res.status(400).json({msg:"Email already exits"});
            console.log("User Already exits you idiot");
            return;
        }

        const data=await User.create({username,email,phone,password});
        // res.status(200).json({msg:"user Created Succesfully"});
        res.status(201).json({
            msg:"User Created Succesfully",
            token:await data.generateToken(),
            userId:data._id.toString(),
        });
        console.log(data); 
        
    } catch (error) {

        console.log(error,"Internal Server Error");
        res.status(500).json({msg:"Internal Server Error"});
    }
}


const login = async(req,res)=>{
    try {
        const {email,password}=req.body;
        const userExits = await User.findOne({email });

        if(!userExits){
            return res.status(400).json({msg:"Invalid Credinatls"})
        }

        // const isPasswordValide  = await bcrypt.compare(password,userExits.password);

        if(userExits && await userExits.passwordChecker(req.body.password)){
            res.status(200).json({
                msg:"Login Succesfully",
                token:await userExits.generateToken(),
                userId:userExits._id.toString(),
            });
        
        }

        else{
            res.status(401).send({msg:"Inavlid email or password"});
        }


    } catch (error) {
        res.status(500).json({msg:"Internal Server Error"})
    }
}

const user =async (req,res)=>{
    try {
        
    } catch (error) {
        console.log("Error Realted to user route")
    }

}
module.exports = {home,register,login,user};