import express from "express";
import cors from "cors";
import z from "zod";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import jwt from  "jsonwebtoken";
import { Content, Links, User } from "./db";
import { isAwaitKeyword } from "typescript";
import { JWT_PASSWORD } from "./config";
import { useMidddleware } from "./middleware";
import { random } from "./utils";

const app=express();
app.use(express.json());
app.use(cors());

app.post("/api/v1/signup",async (req,res)=>{
    const requiredBody=z.object({
        username:z.string().min(3).max(10),
        password:z.string().min(8).max(20),
    });

    const parseWithSuccess=requiredBody.safeParse(req.body);

    if(!parseWithSuccess.success){
        return res.status(403).send({
            message:"invalid input !!"
        });
    }

    const {username,password}=parseWithSuccess.data;

    const existingUser=await User.findOne({
        username,
    });

    if(existingUser){
        return res.status(411).send({
            message:"username already exits !!"
        });
    }

    const hashedPass= await bcrypt.hash(password,10);

    try {
        const user=await User.create({
            username,
            password:hashedPass,
        });

        const userId=user._id;

        return res.status(202).send({
            message:"signed up successfully!!"
        });

    } catch (error) {
        return res.status(411).send({
            message:"something went wrong"
        })
    }

});

app.post("/api/v1/signin", async(req,res)=>{
    const requiredBody=z.object({
        username:z.string().min(3).max(10),
        password:z.string().min(8).max(20),
    });

    const parseWithSuccess=requiredBody.safeParse(req.body);

    if(!parseWithSuccess.success){
        return res.status(403).send({
            message:"invalid input !!"
        });
    }

    const {username,password}=parseWithSuccess.data;

    const user = await User.findOne({
        username,
    });

    if(!user || !user.password){
        return res.status(411).send({
            message:"invalid creditentials!"
        });
    }

    const passMatch=await bcrypt.compare(password,user.password);
    if(user && passMatch){
        const token=jwt.sign({
            userId:user._id
        },JWT_PASSWORD);

        return res.status(202).send({
            messaage:"signed in successfully",
            token,
        })
    }
    else{
        return res.status(411).send({
            message:"invalid credentials!!"
        });
    }
});

app.post("/api/v1/content",useMidddleware,async (req,res)=>{
    const {type,link,title}=req.body();

    try {
        const content = await Content.create({
        link,
        type,
        title,
        tags:[],
        userId:req.userId
    });
    return res.status(201).send({
        message:"post created !"
    })
    } catch (error) {
        return res.status(501).send({
            message:"something went wrong!!"
        })
    }

});

app.get("/api/v1/content",useMidddleware,async (req,res)=>{
    const userId=req.userId;
   try {
        const content=await Content.find({
            userId:userId,
        }).populate("userId","username");

        return res.status(202).send({
            content
        })
   } catch (error) {
        return res.status(402).send({
            message:"something went wrong !"
        })
   }
});

app.delete("/api/v1/content",useMidddleware,async (req,res)=>{
    const {contentId}=req.body;

    try {
        const response=await Content.deleteMany({
        contentId,
        userId:req.userId,
    });

        return res.status(201).send({
            message:"posts deleted successfully !"
        });
    } catch (error) {
        return res.status(511).send({
            message:"somethinng went wrong!!"
        })
    }

})

app.post("/api/v1/brain/share",async (req,res)=>{
    const {share}=req.body;
    if(share){
        await Links.create({
            userId:req.userId,
            hash:random(10),
        });
    }else{
        await Links.deleteOne({
            userId:req.userId,
        });
    }

    res.status(202).send({
        message:"updated shareable link!"
    });

});

app.get("/api/v1/brain/:shareLink",(req,res)=>{

});

app.listen(3000);

