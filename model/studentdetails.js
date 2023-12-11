const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://jerinjoseph077:kollanur@cluster0.yaenz4s.mongodb.net/database1?retryWrites=true&w=majority")
.then(()=>{console.log("DB connuct")})
.catch(err=>console.log(err));
const studentschema=new mongoose.Schema(
    {
    Admno:Number,
    Name:String,
    Age:Number,
    Course:String,

});
var studentmodel=mongoose.model("Students",studentschema)
module.exports=studentmodel;
