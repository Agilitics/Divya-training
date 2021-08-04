const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
//const rounds = 10
 //const jwt = require('jsonwebtoken')
 //const tokenSecret ="my-token-secret"

router.get('/login', (req, res) => {
  User.findOne({email: req.body.email})
  .then(user => {
    if(!user) res.status(404).json({error : 'no user with that email found'})
    else{
      bcrypt.compare(req.body.password, user.password, (error,match) =>{
        if (error) res.status(500).json(error)
        else if (match) res.status(200).json({token: generateToken(user)})
        else res.status(403).json({error: 'passwords do not match'})
      })
    }
  })
  .catch(error =>{
    res.status(500).json(error)
  })
});
module.exports = router



