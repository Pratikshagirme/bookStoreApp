import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    fullname:{
        type:String,
        requires:true
    },
    email:{
        type:String,
        requires:true,
        unique:true
    },
    password:{
        type:String,
        requied:true

    },
   
})
 const User=mongoose.model("User",userSchema);
 export default User;