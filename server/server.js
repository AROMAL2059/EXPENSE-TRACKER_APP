import  express  from "express";
import mongoose from 'mongoose';
import cors from 'cors'


const PORT=4000;
const app= express()

app.use(cors);

 await mongoose.connect("mongodb+srv://Aromal2059:6kic02urfJbBtg03@cluster0.csz2pq5.mongodb.net/?retryWrites=true&w=majority");
 console.log("MOngoDB connected");



app.get("/",(req,res)=>{
    res.send("HELLLLLO");
});
app.listen(PORT,()=>{
    console.log("Server is running at http://localhost:4000");
});