
var express= require('express')
var bp= require('body-parser')
var cors= require('cors')
var app= express()
app.use(bp.json())
app.use(cors())
users=[]
formUsers=[]
app.post("/adduser",(req,res)=>{
    var data=req.body
    users.push(data)
    res.send('user added')
 })
 app.post("/users",(req,res)=>{
    var data=req.body
    formUsers.push(data)
    res.send('user added')
 })
app.get("/users",(req,res)=>{
    res.send(users)
})
app.get("/loadusers2",(req,res)=>{
    res.send(formUsers)
})
app.listen(4000,()=>{
    console.log('server is ready...!');
})
