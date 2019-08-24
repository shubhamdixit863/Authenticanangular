const mongoose=require('mongoose'); // we are requiring mongoose here
const UserSchema=mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true},
    role:{type:String,required:true}
    
})

module.exports=mongoose.model('User',UserSchema);