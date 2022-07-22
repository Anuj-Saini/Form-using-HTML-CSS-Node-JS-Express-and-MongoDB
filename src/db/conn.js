const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/youtubeEmployee").then(()=>{
    console.log("connection create sucessfully");
}).catch((err)=>{
    console.log(err);
});