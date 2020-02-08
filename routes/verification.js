const router = require('express').Router();
let Register = require('../models/register.model');
const Token =require('../models/token.model')
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('SG.AUGRUU5sTFqx5FQ42zigsw.QAO5mpDmTkxjikWhPKxPxG_WhhsSAfv290U945ZZjKQ');
const jwt = require('jsonwebtoken')
const express=require('express');
const app=express();
const cookieParser = require('cookie-parser')
app.use(cookieParser())
const jwtKey = 'app'
router.route('/').post((req, res) => {
         const id=jwt.verify(req.cookies.token,jwtKey).id
        console.log(id+"/"+ req.body.code)
        Token.findOne({
           _id:id,
           code:req.body.code
        }).then(res1=>{
           res.json({msg:"Veriification Done"}).send(200)
        })
        
  });


module.exports = router;