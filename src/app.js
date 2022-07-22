const express=require("express");
const path=require("path");
const hbs=require("hbs");
require("./db/conn");
const app=express();
const Register=require("../src/moduls/mb");
const port=process.env.PORT || 3000;
const template_path=path.join(__dirname,"../templates/views");
const Partials_path=path.join(__dirname,"../templates/partials");
app.use(express.static(template_path));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(Partials_path);
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/home",(req,res)=>{
    res.render("index");
})
app.get("/register",(req,res)=>{
    res.render("register");
})
app.post("/register", async(req,res)=>{
    try {
       const password=req.body.Password;
       const cpassword=req.body.ConfirmPassword;
       if(password===cpassword){
         const newResister=new Register({
            FirstName:req.body.FirstName,
            LastName:req.body.LastName,
            Password:req.body.password,
            ConfirmPassword:req.body.cpassword,
            gender:req.body.gender,
            Email:req.body.Email, 
            Phone:req.body.Phone,
            message:req.body.message
         })
         const register=await newResister.save();
         req.status(201).render("index");
       }else{
        res.send("password is not macthing");
       }
       
      
    } catch (error) {
        res.status(400).send(error);
        
    }
})
app.get("/login",(req,res)=>{
    res.render("login");
})
app.listen(port,()=>{
    console.log(`server is running at ${port} sucessfully`);
})