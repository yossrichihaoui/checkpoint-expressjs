const express=require("express")
const app=express()
const path=require("path")
const port=3003;
const date=new Date();
const hour=date.getHours();
const day=date.getDay();
console.log(day,hour);
app.listen(port,()=>{
    console.log( `server is runing on ${port}`)
})
const midlware=(req,res,next)=>{
    if(day>=1 && day<=5 && hour>=9 && hour<17){
        next()
    }else{
        res.send("closed");
    }
  
}



app.get("/home",midlware,(req,res)=>{
    res.sendFile(path.join(__dirname,"pages","home.html"))
})
app.get("/contact",midlware,(req,res)=>{
    res.sendFile(path.join(__dirname,"pages","contact.html"))
})
app.get("/service",midlware,(req,res)=>{
    res.sendFile(path.join(__dirname,"pages","service.html"))
})

