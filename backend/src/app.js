import express from "express";
import { createServer} from "node:http";
import {Server} from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";
// import newUserRoutes from "./routes/users.routes.js"
const app = express();
const  server = createServer(app);
const io = connectToSocket(server);
// const io = new Server(server);

app.set("port" , (process.env.PORT || 8000));
 app.use(cors());
 app.use(express.json({limit :"40kb"}));
 app.use(express.urlencoded({limit:"40kb" , extended :true }));

 app.use("/api/v1/users" , userRoutes);


 const start = async ( ) =>{
// app.listen(8000 , ()=>{
//     console.log("LISTENING TO PORT 8080");
// });
app.set("mongo_user")
  const connectionDB = await mongoose.connect("mongodb+srv://anjalinirwal02_db_user:videocallwebrtc@videocall.q20jb71.mongodb.net/?retryWrites=true&w=majority&appName=videocall");
  console.log(`mongo connected  DB host: ${connectionDB.connection.host} `);
server.listen(8000 , ()=>{
    console.log("LISTENING TO PORT 8000");
});
}

start();