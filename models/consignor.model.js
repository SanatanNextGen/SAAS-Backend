const mongoose = require('mongoose');

const consignorSchema = new mongoose.Schema({
  businessName: String,
  firstName: String,
  lastName: String,
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
  },
  gstin: String,
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
    Documents: String,
  }
}, { timestamps: true });

module.exports = mongoose.model('Consignor', consignorSchema);
