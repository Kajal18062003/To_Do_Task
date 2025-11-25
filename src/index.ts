import express ,{ Application } from "express"
import dotenv from "dotenv"
import UserRouter from "./routes/user";
import ToDoRouter from "./routes/ToDoRoute";


dotenv.config()
const app:Application = express()
console.log("my express is being started")
app.use(express.json())

app.use("/api/user" , UserRouter)
app.use("/api/todo" , ToDoRouter)
export default app;

