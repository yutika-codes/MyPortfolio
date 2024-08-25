import express from "express";
import dotenv  from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";
// import cookieParser from "cookie-parser";
import cors from "cors";

//config
dotenv.config({
    path:"./config/config.env"                                                                                                      
})


const app=express();

//using middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended:false,
})
);
// app.use(cookieParser());


// import course from "./routes/courseRoutes.js";
import user from "./routes/userRoutes.js";

//Importing and using routes
// app.use("/api/v1/",course);

app.use("/api",user);
export default app;
app.use(ErrorMiddleware);



