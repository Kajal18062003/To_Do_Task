import express , {Response} from "express";
import { auth  , AuthRequest} from "../middleware/Auth";
import { ToDoController } from "../controller/ToDo";


const ToDoRouter = express.Router()

ToDoRouter.post("/Create" , auth , ToDoController.CreateTask);
ToDoRouter.get("/Fetch" ,auth , ToDoController.GetAllTask );
ToDoRouter.patch("/Update/:id" , auth , ToDoController.UpdateTask);
ToDoRouter.delete("/delete/:id" , auth , ToDoController.DeleteTask)


export default ToDoRouter;