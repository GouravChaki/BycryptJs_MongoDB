const express = require('express')
const { body, validationResult } = require('express-validator')
const User = require('../documents/user')
const bcrypt = require('bcryptjs')
const router = express.Router();
router.post('/', [
    body('name', 'name length must be minimum 3').isLength({ min: 4 }),
    body('email', 'email is not right').isEmail(),
    body('password', 'password length must be minimum 5').isLength({ min: 3 })
], async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(404).json({ errors: error.array() });
    }
    try{
        let user = await User.findOne({email:req.body.email})
        console.log(user)
    if(user)
    {
        return res.status(404).json({error:"A user with this email id already exists"})
    }
    user= await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    res.json(user)
    }
    catch(error)
    {
        res.status(500).send("Some Error Occured")
    }
})
router.get('/', () => {
    res.send("Hello this is backend Testing website")
})
module.exports = router