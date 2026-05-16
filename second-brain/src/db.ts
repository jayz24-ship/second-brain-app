import mongoose, { Types } from "mongoose";
import { Schema } from "mongoose";
import { ObjectId } from "mongoose";
import { model } from "mongoose";

const userSchema= new Schema({
    username:{
        type:String,
        unique:true,
    },
    password:{
        type:String
    }
});
export const User=model("Users",userSchema);

const contentSchema=new Schema({
    link:String,
    type:String,
    title:String,
    tags:[{type: Types.ObjectId, ref: "Tag"}],
    userId:{type:Types.ObjectId,ref:"User",required:true},
});
export const Content=model("Contents",contentSchema);

const tagsSchema=new Schema({
    title:{type:String, required:true, unique:true},
    id:Types.ObjectId,
});
export const Tags=model("Tags",tagsSchema);

const linkSchema=new Schema({
    userId:{
        type:Types.ObjectId,
        ref:"User",
        required:true,
        unique:true,
    },
    hash:{type:String, required:true}, 
});
export const Links=model("Links",linkSchema); 

