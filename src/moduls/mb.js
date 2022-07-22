const mongoose=require("mongoose");
const Employee=new mongoose.Schema({
    FirstName :{
     type:String,
     required:true
    },
    LastName :{
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
    message:{
     type:String,
    }
})
const Register=new mongoose.model("Register",Employee);
module.exports=Register;