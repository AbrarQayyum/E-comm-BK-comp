// Routes/paymentRoutes.js

import express from 'express';
import {
  createPayment,
  getPayments,
  getPayment,
  updatePayment,
  deletePayment,
} from '../Controllers/paymentController.js'; // Correct path to the controller

const router = express.Router();

// Create a new payment
router.post('/', createPayment);

// Get all payments
router.get('/', getPayments);

// Get a single payment by ID
router.get('/:id', getPayment);

// Update a payment by ID
router.put('/:id', updatePayment);

// Delete a payment by ID
router.delete('/:id', deletePayment);

export default router;
