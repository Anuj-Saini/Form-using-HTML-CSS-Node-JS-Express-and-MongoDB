const mongoose=require("mongoose");
const bcrypt=require("bcryptjs")
const Employee=new mongoose.Schema({
    FirstName:{
     type:String,
     required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Password:{
        type: String,
        required:true
    }
    ,ConfirmPassword:{
        type: String, 
        required:true
    },
    
    gender:{
    type:String,
    }
    ,Email:{
        type:String,
        required:true,
        unique:true
    }
    ,Phone:{
        type:Number,
        
    },
    Message:{
     type:String,
    }
})
Employee.pre("save",async(next){
    const passwordHash=await bcrypt.hash(Password,10);
})
const Register=new mongoose.model("Register",Employee);
module.exports=Register;