const express=require('express');
const router =express.Router();
const transactionController=require("../controllers/TransactionHistory");
router.post("/sendAmount",transactionController.postTransaction);
router.get("/get_history",transactionController.getTransactions);
module.exports=router;