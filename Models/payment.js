// models/payment.js

import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  nameOnCard: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: String, // Store as a string in MM/YY format
    required: true,
  },
  cvv: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export default mongoose.model('Payment', paymentSchema);
