const express=require("express")
const app=new express();
const cors=require("cors")
const studentmodel=require('./model/studentdetails')
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

app.listen(3005,(request,response)=>{
    console.log("port is running 3005")
})
app.get('/',(request,response)=>{
    response.send("hai")
})
app.post('/new',(request,response)=>{
    console.log(request.body)
    new studentmodel(request.body).save();
    response.send("record saved")

})
app.get('/view',async(request,response)=>{
    var data=await studentmodel.find();
    response.send(data)
})