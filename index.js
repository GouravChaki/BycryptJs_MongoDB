const connectmonngo=require('./db')
const express=require('express')
connectmonngo();
const app=express()
const routes=require('./Router/Routes')
app.use(express.json())
app.use('/',routes)
app.use('/routes',routes)
app.listen(3000,()=>{
    console.log("Port Listened")
})