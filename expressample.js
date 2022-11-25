const express=require('express')
const path=require('path')

const app=express()

app.use(function(req,res,next){
    console.log('start');
    next()
})

app.get('/signup',function(req,res,next){
    res.sendFile(path.join(__dirname,'signup.html'))
    console.log('middle');
    next()
})

app.use(function(req,res){
    console.log('end')
})

app.post('/signup',function (req,res){
    res.send('account created')
})


app.listen(5000,function (){
    // console.log(__dirname);
    console.log('server started')
})