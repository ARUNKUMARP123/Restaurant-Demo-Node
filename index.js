const express=require("express");
const{connectdb,mongoose}=require("./db");
const {handleUserRegistration,handleUserLogin}=require("./Services")


const app=express();

const bodyparser=require("body-parser");
const cors=require("cors");


app.use(cors());
app.use(bodyparser.json( ));

connectdb();

app.get("/",(req,res,next)=>{
  res.send("Server Working");
})

app.get("/connectdb",(req,res,next)=>{
  connectdb(res);
  //res.send("Database Working");
})

app.post("/login",(req,res,next)=>{
console.log(req.body);
handleUserLogin(req,res);
})

app.post("/registration",(req,res,next)=>{
    handleUserRegistration(req,res);
    })

app.listen(4000,()=>{
    console.log("Server Started at 4000")
})