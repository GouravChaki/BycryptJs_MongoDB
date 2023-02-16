const jwt = require('jsonwebtoken')
const JWT_SECRET="jwtsecret"
const fetch=(req,res,next)=>{
    const token=req.header('auth-token')
    if(!token){
        res.staus(404).send({error:"Please authenticate a valid token"})
    }
    try{
        const data=jwt.verify(token,JWT_SECRET)
        req.id=data
        next()
    }
    catch(error){
        res.staus(404).send({error:"Data can't be retrieved"})
    }
}
module.exports=fetch