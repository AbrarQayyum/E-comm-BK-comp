// models/invoice.js

import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid'; // For generating unique Order IDs

const invoiceSchema = new mongoose.Schema({
  orderId: {
    type: String,
    default: uuidv4, // Generate a new UUID by default
    unique: true, // Ensure it's unique
  },
  customerName: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  items: [
    {
      description: String,
      quantity: Number,
      price: Number,
    },
  ],
}, { timestamps: true });

export default mongoose.model('Invoice', invoiceSchema);
