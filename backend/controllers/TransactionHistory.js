const TransactionHistoryModel=require("../models/TransactionHistory");
exports.postTransaction = async (req, res, next) => {
  try {
      const { sender, receiver, amount,status } = req.body;
      console.log("sn",sender)
      const newTransaction = await TransactionHistoryModel.create({
          Sender: sender,
          Receiver: receiver,
          Amount: amount,
          Status: status
      });
      res.status(201).json({ message: 'Transaction created successfully', transaction: newTransaction });
  } catch (err) {
      console.error('Error creating transaction:', err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};
exports.getTransactions = async (req, res, next) => {
    try {
      const transactions = await TransactionHistoryModel.find();
      res.status(200).json({ transactions });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  };