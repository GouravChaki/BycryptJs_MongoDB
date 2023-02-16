const mongoose=require('mongoose')
const mongoURI="mongodb+srv://GouravChaki:Gourav@cluster0.ifo2taa.mongodb.net/aloo"
const connectmonngo= ()=>{
        mongoose.connect(mongoURI,()=>{
            console.log('Connected to mongodb')
        })
}
module.exports=connectmonngo;