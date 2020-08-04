const express=require('express');
const bodyParser=require('body-parser');
var users=[
    {name: 'Hai'},
    {name: 'Hong'},
    {name: 'Cuc'},
    {name: 'Hue'},
 ];
const app=express();
const port=3000;
app.set('views','./views');
app.set('view engine', 'pug');
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
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
    
});
app.get('/users/create',(req,res)=>{
    res.render('users/create',{users:users});
  });
  app.post('/users/create',(req,res)=>{
    var postName=req.body;
    console.log(postName);
    users.push(postName);
    res.redirect('/users');
  });
app.listen(port, (rep,res)=>{
    console.log('day la port: '+port)
})