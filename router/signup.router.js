const {Router}=require("express")
const {User_Model}=require("../model/User")
const bcrypt=require("bcrypt")

const signupRouter=Router();


signupRouter.post('/',async(req,res)=>{
      const {email,password}=req.body;
      try {
          if(email&&password){
            let finduser=await User_Model.find({email})
            if(finduser.length>0){
            //   console.log("exist");
              res.send({"msg":"email already exist","userExist":true})
            }
            else{
    
              bcrypt.hash(password, 5, async function(err, hash) {
              if(hash){
                const user=new User_Model({email,password:hash})
                await user.save()
                res.send({"msg":"signup successfull","signup":true,"userExist":false})
              }
              else if(err){
                res.send({"msg":"something went wrong"})
              }
            });
            }
             
          }
          else{
              res.send({"msg":"something went wrong"})
          }
      } catch (error) {
          console.log(error)
      }
     
     
  })
  
  module.exports={signupRouter}