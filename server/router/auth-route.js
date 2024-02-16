const express = require('express');
const router = express.Router();
const authcontroller = require('../controller/auth-controller');
const validate = require('../middlevare/validate-middleware');
const signupSchema = require('../validotors/auth-validator')


router.route('/').get(authcontroller.home);
router.route('/register').post(validate(signupSchema),authcontroller.register);
router.route('/login').post(authcontroller.login);
router.route('/user').get(authcontroller.user);

// router.get('/',(req,res)=>{
// res.status(200).send("This is using routers");
// });

// router.route('/register').get((req,res)=>{
//     res.
//     status(200).send("THis is a register page using routes");
// })

module.exports = router;