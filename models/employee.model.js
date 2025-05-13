const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  personal: {
    firstName: String,
    lastName: String,
    dob: Date,
    gender: String,
  },
  contact: {
    phone: String,
    email: String,
  },
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
  },
  position: {
    title: String,
    department: String,
    hireDate: Date,
    salary: String,
    workShift: String,
    licenseDetails: {
      licenseNumber: String,
      licenseType: String,
      issueDate: Date,
      expiryDate: Date,
    },
  },
  emergencyContact: {
    name: String,
    relation: String,
    phone: String,
    email: String,
  },
  status: {
    employmentStatus: String,
    lastChecked: Date,
  },
  performance: String,
  Documents: {
    Documents: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Employee', employeeSchema);
