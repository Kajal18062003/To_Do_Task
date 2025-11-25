import mongoose, {  Document, Schema } from "mongoose";


export interface ItoDo extends Document{
    title : string ;
    Description : string ;
    isCompleted :boolean;
}

const ToDoSchema : Schema <ItoDo> =new Schema({
   title:{
    type:String ,
    required :true,
   },

   Description:{
    type:String ,
    required:true,
   },

   isCompleted:{
    type:Boolean,
    required :true
   }

})

export const ToDo = mongoose.model("ToDo" ,ToDoSchema )