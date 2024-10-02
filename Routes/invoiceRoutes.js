// Routes/invoiceRoutes.js

import express from 'express';
import {
  createInvoice,
  getInvoices,
  getInvoice,
  updateInvoice,
  deleteInvoice,
} from '../Controllers/invoiceController.js'; // Correct path to the controller

const router = express.Router();

// Create a new invoice
router.post('/', createInvoice);

// Get all invoices
router.get('/', getInvoices);

// Get a single invoice by ID
router.get('/:id', getInvoice);

// Update an invoice by ID
router.put('/:id', updateInvoice);

// Delete an invoice by ID
router.delete('/:id', deleteInvoice);

export default router;
