const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid"); // Import uuidv4 function

const brokerSchema = new mongoose.Schema(
  {
    id: {
      type: String, // Use String type for the id
      default: uuidv4, // Use uuidv4 to generate a unique id by default
    },
    firm: {
      firmName: String,
      firmType: String,
      firmPANNumber: String,
      gstin: String,
    },
    firmAddress: {
      street: String,
      city: String,
      state: String,
      zip: String,
    },
    owner: {
      OwnerFirstName: String,
      OwnerLastName: String,
      adharNumber: String,
    },
    ownerAddress: {
      street: String,
      city: String,
      state: String,
      zip: String,
    },
    contact: {
      email: String,
      phone: String,
    },
    bankDetails: {
      accountNumber: String,
      ifscCode: String,
      bankName: String,
    },
    Documents: {
      PANCard: String,
      AdharCard: String,
      visitingCard: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Broker", brokerSchema);
