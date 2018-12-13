var express = require('express')
var ejs = require('ejs')
var bodyparser = require('body-parser')


var urlEncodedParser=bodyparser.urlencoded({extended: false})

var app=express()

app.set('view engine','ejs')
app.set('views',__dirname+'/views')

app.get('/',function(req,res){
    //res.sendFile(__dirname+'/home.html')
    //res.send("I am in Home-Page!" + __dirname)
    res.render('home')
})

app.get('/about',function(req,res){
    //res.sendFile(__dirname +'/about.html')
    console.log(req.query)
    res.render('about',{urlData:req.query})
})

app.get('/contact',function(req,res){
    //res.sendFile(__dirname +'/contact.html')
    res.render('contact')
})

app.post('/contact',urlEncodedParser,function(req,res){
    console.log(req.body)
    res.send("Received Permission "+ JSON.stringify(req.body))
})


app.get('/profile/:name',function(req,res){
    //res.send("I am in Profile Page of " + req.params.id)
    var personData={age:23,loc:"Bangalore",hobbies:["Photography","Travelling","Coding","Hogging"]}
    res.render('profile',
        {personName:req.params.name,
        data:personData
        })
})

app.listen(8888)