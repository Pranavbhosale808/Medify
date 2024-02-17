const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    Phone_Number:{
        type:Number,
        required:true
    },
    Description:{
        type:String,
        required:false
    },
    // Add_Photo:{
    //     type:
    // }
})

const Vendor = new mongoose.model("Vendor",UserSchema);

module.exports = Vendor;