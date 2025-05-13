const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Routes
const vehicleRoutes = require("./routes/vehicleRoutes");
const branchRoutes = require("./routes/branchRoutes");
const employeeRoutes = require("./routes/employee.routes");
const consignorRoutes = require("./routes/consignor.routes");
const consigneeRoutes = require("./routes/consignee.routes");
const brokerRoutes = require("./routes/broker.routes");
const dbURI = process.env.MONGODB_URI;
console.log("🚀 ~ dbURI:", dbURI)
const app = express();

const corsOptions = {
  origin: "*",
  methods: "*",
  allowedHeaders: "Content-Type, Authorization, x-auth-token",
};

app.use(cors(corsOptions));

/**
 * Express JSON Middleware
 */
app.use(express.json());

/**
 * API Routes
 */
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/branches", branchRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/consignors", consignorRoutes);
app.use("/api/consignees", consigneeRoutes);
app.use("/api/brokers", brokerRoutes);

/**
 * MongoDB Connection
 */
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

module.exports = app;
