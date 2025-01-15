import express from "express";
import PostMessage from "../models/postMessages.js";
import mongoose from "mongoose";

export const getPost= async (req,res)=>{
    try {
        const postMessages= await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

export const createPost=async (req,res)=>{
    const post=req.body; 
    const newPost=new PostMessage({...post,creator: req.userId,createdAT: new Date().toISOString()});
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};

export const updatePost=async (req,res)=>{
    const {id:_id}=req.params;
    const post=req.body;
    console.log(req.userId);
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with the following object Id');
    const existingPost =await PostMessage.findById(_id);
    if(existingPost?.creator!=req.userId)
        return res.status(401).json({message:'You are not authorized to edit this post'});
    const updatedPost = await PostMessage.findByIdAndUpdate(_id,{...post,_id},{new : true});
    res.send(updatedPost);
}

export const deletePost=async (req,res)=>{
    const {id}=req.params;
    if(!req.userId) return res.json({message: 'Unauthenticated, please login to delete the post'});
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with the following object Id');
    const post =await PostMessage.findById(id);
    if(post.creator!==req.userId) return res.status(401).json({message: 'Unauthenticated. You cannot delete the post.'});
    await PostMessage.findByIdAndDelete(id);
    res.send({message: 'Post successfully deleted'});
}

export const likePost=async (req,res)=>{
    const {id}=req.params;
    if(!req.userId) return res.json({message: 'Unauthenticated'});
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with the following object Id');
    const post =await PostMessage.findById(id);
    // console.log(post.likes);
    const index=post.likes.findIndex((id)=> id===String(req.userId));
    // console.log(index);
    // console.log(post.likes);
    if(index==-1){
        // For pushing the userIds in the likes array. This means the user with the id has liked the post.
        post.likes.push(req.userId);
    }
    else{
        // THis means the userId is already present in the likes array the user cannot like the post anymore. So he will dislike the post.
        console.log('Inside filter section');
        console.log('req.userId: '+req.userId);
        // post.likes.map((id)=> {console.log('Inside map of filter section: '+id)});
        post.likes=post.likes.filter((id)=>  id!==String(req.userId));
        // post.likes.map((id)=> {console.log('Inside map of filter section after: '+id)});
    }  
    console.log(post.likes);
    const updatedPost = await PostMessage.findByIdAndUpdate(id,post,{new : true});
    res.send(updatedPost);
}