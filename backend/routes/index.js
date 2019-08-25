var express = require('express');
var router = express.Router();
let User=require("../models/Users")
let mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

mongoose.connect("mongodb+srv://logan:logan@cluster0-zfsn8.mongodb.net/signupapp?retryWrites=true&w=majority")
.then(()=>{
  console.log("Connected")
}).catch(err=>console.log(err));
/* GET 

/* GET home page. */
router.post('/signup', function(req, res, next) {
  let username=req.body.username;
  let password=req.body.password;
  let name=req.body.name;
  let email=req.body.email;

  
async function checkuser()
{
  let usercheck=await User.findOne({username:username})
  console.log("Checking user",usercheck);
  if(usercheck)
  {
    res.json({"message":"Username Already Exists"});
  }

  else{
    let user=new User({
      username:username,
      password:password,
      name:name,
      email:email,
      role:"user"
  
    })
    user.save((err,event)=>{
      if (err) return console.error(err);
      console.log(event._id + " saved to user  collection.");
      res.json({"message":"User  Registered Please Login With Your Credentials"});
    })
  }
}
checkuser();
  

});


router.post('/login',async (req,res,next)=>{
 console.log(req.body.username);
  try{
    let user=await User.findOne({username:req.body.username});
    console.log(user);
    if(!user)
    {
      res.json({"messagae":"User Doesn't Exists"}).status(404);
    }
    else{
      // checking password here for user
      if(req.body.password==user.password)
      {
          // authentication success
          const token=jwt.sign({"username":user.username},"blackcat",{expiresIn:"1h"})
          res.json({"message":"Success","token":token,"user":user.username,"role":user.role}).status(200);
    
      }
      else{
        res.json({"message":"Wrong Password or Username"}).status(401);
      }
    }
  }
  catch(err)
  {
    res.json(err);
  }
  
  
  

})


router.post("/getAll", async (req,res)=>{
   
  //we will get all the users registered in our database

  try{
 let user=await User.find();
 console.log("USer",user);
 res.json({"user":user});
  }

  catch(e){
    console.log(e);
  }

  })


  router.post("/userdelete", async (req,res)=>{
   console.log("called")
    //we will get all the users registered in our database
  let username=req.body.username;
    try{
   let user=await User.find({ username:username }).remove();
   
   res.json({"message":"Deleted"});
    }
  
    catch(e){
      console.log(e);
    }
  
    })


module.exports = router;
