require("./model/index")
const express = require("express")
const app = express()
app.set('view engine','ejs')

// hahahhahahahha


//jlsdfsdljfksldkfjdf

app.get("/",(req,res)=>{
    res.render("home.ejs")
})

app.get("/login",(req,res)=>{
    res.render("login")
})


app.listen(3000,()=>{
    console.log("project has started")
})
