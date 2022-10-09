var express=require("express")
var app=express()
var router=require("./routes/route.js")
var availability=require("./middlewares/availability.js")
app.use(availability,router)
app.use(express.static(__dirname+"/css"))


app.listen(4000,()=>{"server is running..."})