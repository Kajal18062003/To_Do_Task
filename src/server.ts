import app from "./index"
import { connectDB } from "./dbs/mongo-connection";
import dotenv from "dotenv"


dotenv.config()

const PORT = process.env.PORT || 3000;
connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }).catch(err=>{
    console.error("Something went wrong", err)
  })

