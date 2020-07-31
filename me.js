const express=require('express');
const app=express();
const port=3000;
app.get('/user',(req,res)=>{
   res.send('Hello There!!!!')
})
app.listen(port, (rep,res)=>{
    console.log('day la port: '+port)
})