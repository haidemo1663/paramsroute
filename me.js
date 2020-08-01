const express=require('express');
const { query } = require('express');
const { render } = require('pug');
var users=[
    {name: 'Hai', gender: 'male'},
    {name: 'Hong', gender: 'male'},
    {name: 'Cuc', gender: 'male'},
    {name: 'Hue', gender: 'male'},
 ];
const app=express();
const port=3000;
app.set('views','./views');
app.set('view engine', 'pug');
app.get('/users',(req,res)=>{
   res.render('users/index',{users}
)});
app.get('/users/search',(req,res)=>{
    var q=req.query.q;
    var matchUser=users.filter(x=>{
        return x.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index',{users: matchUser});
})
app.listen(port, (rep,res)=>{
    console.log('day la port: '+port)
})