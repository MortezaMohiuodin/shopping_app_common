import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken'

declare global {
    interface Req extends Request{
        session?: any,
        currentUser?:any
    }
}


export const currentUser = (jwt_key : string)=>{
    return (req:Req,res:Response,next:NextFunction)=>{
        if(!req.session?.jwt) next()
        try{
            const currentUser = jwt.verify(req.session?.jwt,jwt_key)
            req.currentUser = currentUser

        }catch(e){
            next(e)
        }    
        next()
    }
}

export default currentUser