const express=require('express');
const app=express();
const port=3000;
app.set('views','./views');
app.set('view engine', 'pug');
app.get('/users',(req,res)=>{
   res.render('users/index',{
       UserName:[
       {name: 'Hai', gender: 'male'},
       {name: 'Hong', gender: 'male'},
       {name: 'Cuc', gender: 'male'},
       {name: 'Hue', gender: 'male'},
    ]});
})
app.listen(port, (rep,res)=>{
    console.log('day la port: '+port)
})