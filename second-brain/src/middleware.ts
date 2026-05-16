import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_PASSWORD } from "./config";

declare global{
    namespace Express{
        interface Request{
            userId?:string;
        }
    }  
}

export const useMidddleware=(req:Request,res:Response,next:NextFunction)=>{

    const token=req.headers.authorization;

    if(!token){
        return res.status(401).send({
            message:"you are not logged in"
        });
    }

    const decoded=jwt.verify(token,JWT_PASSWORD)as JwtPayload;

    if(decoded && decoded.userId){
        req.userId=decoded.userId;
        next();
    }
    else{
        return res.status(411).send({
            message:"invalid token!!"
        })
    }
}

