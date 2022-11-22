const express =require('express');
const app=express();
const middleware1=(re,res,next)=>{
    console.log("middleware1");
    next();
}
const middleware2=(re,res,next)=>{
    console.log("middleware2 for globally");
    next();
}
app.use(middleware2);

app.get('/link1',middleware1,(req,res)=>{
    res.send("<h2>link1 with middleware  1 and 2</h2>")
})
app.get('/link2',(req,res)=>{
    res.send("<h2>link2 with middleware2 </h2>")
})
app.get('/link3',(req,res)=>{
    res.send("<h2>link3 with middleware2 </h2>")
})
app.get('/link4',middleware1,(req,res)=>{
    res.send("<h2>link4 with middleware </h2>")
})

app.listen(3000,()=>{
    console.log("server started");
})

