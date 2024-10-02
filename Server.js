// server.js

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyparser from "body-parser";
import connectdb from "./config/Database.js";
import invoiceRoutes from "./Routes/invoiceRoutes.js"; // Existing invoice routes
import paymentRoutes from "./Routes/paymentRoutes.js"; // New payment routes
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// Connect to MongoDB
connectdb();

// Set up routes
app.use("/invoices", invoiceRoutes); // Existing invoice routes
app.use("/payments", paymentRoutes); // Use /payments route for payment-related requests

// For serving static files (if needed)
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);
app.use('/upload', express.static(path.join(__dirname, 'upload')));

// Port listening 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
