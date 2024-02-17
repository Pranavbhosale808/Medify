const express = require('express');
const router = express.Router();
const vendorForm = require('../controller/vendor-controller');
const uploadform = require('../controller/image-controllers');

router.route('/addVendor').post(vendorForm.addVendor);
router.route('/upload').post(uploadform);
router.route("/getAllVendors").get(vendorForm.getAllVendors );

module.exports = router;
