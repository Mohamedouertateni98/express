const express=require("express")
const route=express.Router()
const  path = require("path");



route.get("/",function (req,res) {
    res.sendFile(path.resolve("./views/Home.html"))
})


route.get("/Contact-us",function (req,res) {
    res.sendFile(path.resolve("./views/Contact us.html"))
})


route.get("/Our-Services",function(req,res){
    res.sendFile(path.resolve("./views/Our Services.html"))
})
module.exports=route
