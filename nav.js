const express=require("express");
const app=express();

app.set("view engine","hbs");

app.get("",(req,res)=>{
  res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/contact",(req,res)=>{
    res.send("Hello !! Welcome to My contact Page.");
})

app.get("/service",(req,res)=>{
    res.send("Hello !! Welcome to My Service Page.");
})

app.listen(5000,(err)=>{
    console.log("Server is running....at Port-5000")
})