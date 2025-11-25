import express ,{ Request , Response , Application } from "express"
import dotenv from "dotenv"
import UserRouter from "./routes/user";


dotenv.config()
const app:Application = express()
console.log("my express is being started")
app.use(express.json())

app.use("/api/user" , UserRouter)
export default app;

