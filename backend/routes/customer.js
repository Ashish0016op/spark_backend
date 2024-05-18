const express = require('express');
const router = express.Router();
const customerController = require("../controllers/customer");

router.post('/customerdata', customerController.postDetails);
router.get('/getCustomer', customerController.getDetails);
router.delete('/deleteCustomer/:id', customerController.deleteCustomerDetails);
router.put('/updateBal/:id', customerController.updateCustomerBal);
router.put('/update_receive_Bal/:id', customerController.updateCustomerReceivedBal);
router.put('/update_send_Bal/:id', customerController.updateCustomerSendBal);

module.exports = router;
