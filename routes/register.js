const router = require('express').Router();
let Register = require('../models/register.model');
const Token =require('../models/token.model')
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('SG.AUGRUU5sTFqx5FQ42zigsw.QAO5mpDmTkxjikWhPKxPxG_WhhsSAfv290U945ZZjKQ');
const jwt = require('jsonwebtoken')



router.route('/').post((req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const location = req.body.location;
    const username = req.body.username;

  const newRegister = new Register({
    username,
    location,
    password,
    email,
  });

  newRegister.save()
  .then(async(userCreated) => {
     let userId=userCreated.id;
    const code=(Math.floor(Math.random() * 90000) + 10000);
    const newToken = await new Token({
       userId,
       code

    })
    .save()
    .then( (user)=>{
        jwt.sign( { id: user.id }, "app", { expiresIn: 3600 }, async (err, t) => {
                    let token=await t;
                    res.cookie('token',token).json({})
               }
           
          )

    })
   
   console.log("Still working bro"+code)
    //   const msg = {
    //     to: 'uwaishkhan55@gmail.com',
    //     from: 'test@example.com',
    //     subject: 'Verification',
    //     text: `Verification Code`+code,
       
    //   };
    //   sgMail.send(msg);
    // console.log(msg)
   
    
    
}
    )
  .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;