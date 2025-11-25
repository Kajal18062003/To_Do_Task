import {  Response } from "express";
import { AuthRequest} from "../middleware/Auth"
import { ToDo } from "../model/ToDo";



 export class ToDoController{
    static async CreateTask(req:AuthRequest , res:Response){
         try{
            const{title , Description} = req.body;

         const task = await ToDo.create({
            title , Description , isCompleted:true , userId : req.user.id
         })

         return res.status(200).json({message : "Task is created" , userId : req.user.id})
         }

         catch(error){
          return res.status(500).json({message:"server error"})
         }
    }


    static async GetAllTask (req:AuthRequest , res:Response){
        try{
            const GetAll = await ToDo.find({userId : req.user.id})
            console.log(GetAll);


            return res.status(200).json({message:"Get all Task" , GetAll })
        }
        catch(error){
      return res.status(500).json({message:"Server problem"})
        }
    }


    static async UpdateTask(req : AuthRequest , res:Response){
         try{
            const{id} = req.params;
            const Update = await ToDo.findOneAndUpdate({_id :id , userId : req.user.id } , req.body , {new :true})

            if(!Update){
                return res.status(400).json({message:"Task is not found "})
            }
            return res.status(200).json({message:"Task is updated succesfully" , Update})
         }
         catch(error){
         return res.status(400).json({message : "server error"})
         }

    }



    static async DeleteTask (req:AuthRequest , res:Response){
       try{
        const{id} = req.params;

        const deleted = await ToDo.findOneAndDelete({_id:id , userId : req.user.id })

      if(!deleted){
        return res.status(400).json({message:"Task is not found"});
      }
      return res.status(200).json({message:"Task is deleted successfully"})
       }
       catch(error){
        return res.status(500).json({message: "server error"})
       }
    }
}


