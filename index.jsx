const express=require("express");


const app=express();

const bodyparser=require("body-parser");
const cors=require("cors");


app.use(cors());
app.use(bodyparser.json( ));
app.get("/",(req,res,next)=>{
  res.send("Server Working");
})

app.post("/login",(req,res,next)=>{
console.log(req.body);
res.send("Login Success");
})

app.post("/registration",(req,res,next)=>{
    console.log(req.body);
    res.send("Registration Success");
    })

app.listen(4000,()=>{
    console.log("Server Started at 4000")
})