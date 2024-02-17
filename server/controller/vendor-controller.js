const Vendor = require('../models/vendor-model.js');
const multer = require('multer');
const path = require('path')

// 1. Get Data
// 2. Check email Existence
// 3. Hash Password
// 4. Create user/vendor
// 5. Save to DB
// 6. Respond with registration successfull or handle error

const addVendor = async (req,res)=>{

    try {
        const { username, email, Phone_Number, Description } = req.body;

        const vendorExist = await Vendor.findOne({email});

        if(vendorExist){
            return res.status(400).json({msg:"Vendor Already exits"});
        }

        await Vendor.create({ username, email, Phone_Number, Description });

        res.status(200).json({msg:"Vendor Created Succesfully"});
    }catch (error) {
        res.status(500).json("internal Server Error");
    }
};

// let storage = multer.diskStorage({
//     destination:'public/images',
//     filename : (req, file, cb)=>{
//         cb(null, file.originalname)
//     }
// });

// const upload = multer({
//     dest: 'public/images',
// });

const getAllVendors = async (req, res) => {
    try{
        const vendors = await Vendor.find();
        console.log(vendors);

        if(!vendors || vendors.length === 0){
            return res.status(404).json({msg:"No vendors found"});
        }
        res.status(200).json(vendors);
    } catch (error){
        next(error);
    } 
};

module.exports = {addVendor, getAllVendors}; 
