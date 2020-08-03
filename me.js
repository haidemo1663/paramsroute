const express=require('express');
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
    var q=req.query.q;
    if(!q){
        res.render('users/index',{users: users});
    }
    else{
        var matchUser=users.filter(user=>{
            return user['name'].toLowerCase().indexOf(q.toLowerCase()) !== -1;
        });
        res.render('users/index',{users: matchUser,keyword: q});
    }
    
})
app.listen(port, (rep,res)=>{
    console.log('day la port: '+port)
})