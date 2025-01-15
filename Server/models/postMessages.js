import express from "express";
import mongoose from "mongoose";

const postSchema= mongoose.Schema(  // mongoose.Schema is used to define the MongoDB schema object.
    {
        title : String,
        message: String,
        name: String,
        creator: String,
        tags: [String],
        selectedFile: String, // React base64 library will be used to convert image file into String.
        // likeCount: {
        //     type: Number,
        //     default: 0
        // },
        likes:{
            type: [String],
            default:[]
        },
        createdAT: {
            type: Date,
            default: new Date()
        }
    }
);

const PostMessage= mongoose.model('PostMessage',postSchema);  // Here Postmessage is the name of the created MongoDB model and postScheman is the schema of the elements that will be stored in the model which is defined above.

export default PostMessage;