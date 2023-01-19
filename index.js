const express=require("express");
const cors=require("cors");
const {connection}=require("./config/db");
const { loginRouter } = require("./router/login.router");
const {signupRouter}=require("./router/signup.router");
const app=express();

app.use(cors())
app.use(express.json());

app.use("/login",signupRouter)
app.use("/signup",loginRouter)


app.get('/',(req,res)=>{
   
    res.send({"msg":"HomePage"})
})


app.listen(8080,async()=>{
try {
    await connection
    console.log("server started")
} catch (error) {
    console.log("something went wrong with server")
    console.log(error);
}
})