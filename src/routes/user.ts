
//const userRouter = express.Router()l;
//UserRouter.get("/getuser",userController.getUser);
import express, { Response } from "express";
import { AuthController } from "../controller/Auth";
import { auth  , AuthRequest} from "../middleware/Auth";


const UserRouter = express.Router()

UserRouter.post("/register" , AuthController.register)
UserRouter.post("/login" , AuthController.login)
UserRouter.get("/profile", auth, (req:AuthRequest, res:Response) => {
  res.json({ message: "Protected route accessed!", user: req.user });
});

export default UserRouter ;




