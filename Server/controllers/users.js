import express from 'express';
import bcrypt from 'bcryptjs'; 
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const signin = async (req,res)=>{
    const {email,password}= req.body;
    try {
        console.log('Inside Sign In');
        const existingUser= await User.findOne({email});
        if(!existingUser) res.status(400).json({message: "User doesn't exist"});
        const passwordIsCorrect = await bcrypt.compare(password,existingUser.password);
        if(!passwordIsCorrect) res.status(400).json({message: "Invalid Credentials"});
        const token= jwt.sign({email: existingUser.email, id: existingUser._id},'test',{expiresIn: "1h"});
        console.log(existingUser);
        res.status(200).json({result: existingUser, token});
    } catch (error) {
        res.status(500).json({message: "Something went wrong"});
    }
}

export const signup= async (req,res) =>{
    console.log('Inside sign Up');
    console.log(req.body);
    const {email, password, confirmPassword, firstName, lastName}=req.body;
    try {
        const existingUser= await User.findOne({email});
        // console.log('Inside sign Up_1');
        if(existingUser) res.status(400).json({message: "User already't exists"});
        // console.log('Inside sign Up_2');
        if(password!==confirmPassword) return res.status(400).json({message: "Passwords don't match"});
        const hashedPassword= await bcrypt.hash(password,12);
        // console.log('Inside sign Up_3');
        const result=await User.create({email, password: hashedPassword, name: `${firstName} ${lastName}`});
        // console.log('Inside sign Up_4');
        // console.log(result);
        const token=jwt.sign({email: result.email, id: result._id},'test',{expiresIn:'1h'});
        // console.log(token);
        res.status(200).json({result,token});
        // const result=User.create({email, password, name: `${firstName} ${lastName}`});
        // console.log('Inside sign Up_3');
        // res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message: "Something went wrong"});
    }
}

export const googleSignUp=(req,res)=>{
    try {
        const gData=req.body;
        console.log(gData);
        const token=jwt.sign({email: gData?.email, id: gData?.sub},'test',{expiresIn:'1h'});
        console.log(token);
        res.status(200).json({result:gData,token});
    } catch (error) {
        res.status(500).json({message: "Something went wrong"});
    }
}