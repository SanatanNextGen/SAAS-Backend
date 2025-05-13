const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({
  branchName: String,
  billtyNumberFrom: String,
  billtyNumberTo: String,
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String
  },
  contact: {
    phone: String,
    email: String
  },
  branchManager: {
    managerName: String,
    managerContact: String,
    managerPhone: String
  }
});

module.exports = mongoose.model('Branch', branchSchema);
