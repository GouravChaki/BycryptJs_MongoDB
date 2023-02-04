const express = require('express')
const { body, validationResult } = require('express-validator')
const User = require('../documents/user')
const router = express.Router();
router.post('/', [
    body('name', 'name length must be minimum 3').isLength({ min: 4 }),
    body('email', 'email is not right').isEmail(),
    body('password', 'password length must be minimum 5').isLength({ min: 3 })
], (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
        .then(obj => {
            res.send(obj)
            console.log(obj)
        })
        .catch((err) => {
            res.send(err)
        });
})
router.get('/routes', (req, res) => {
    res.send(req.body)
})
module.exports = router