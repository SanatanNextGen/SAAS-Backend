const mongoose = require('mongoose');

// First define the Tyre sub-schema
const tyreSchema = new mongoose.Schema({
  TyreBillNo: String,
  TyreBillDate: Date,
  TyreDealerName: String,
  TyreRate: String,
  TyreMakers: String,
  TyreWarranty: String,
  TyreNo: String,
  TyreModel: String,
  TyreType: String,
  TyreFrontRear: String,
  TyreFittedOnDate: Date,
  TyreRemovedOnDate: Date,
  TyreStartKm: Number,
  TyreEndKm: Number,
});

// Then define the main Vehicle schema
const vehicleSchema = new mongoose.Schema({
  Owner: {
    Number: String,
    OwnerName: String,
    OwnerMobileNo: String,
    OwnerPANNo: String,
    OwnerAddress: String,
  },
  Vehicle: {
    Make: String,
    BodyType: String,
    EngineNo: String,
    TruckNo: String,
    ChassisNo: String,
    Model: String,
    YearOfManufacture: String,
    VehicleType: String,
  },
  Fitness: {
    FitnessNo: String,
    FitnessDate: Date,
    FitnessExpiryDate: Date,
  },
  RoadTax: {
    StartDate: Date,
    EndDate: Date,
  },
  Permit: {
    PermitNo: String,
    ValidUpto: Date,
  },
  FiveYearPermit: {
    PermitNo: String,
    ValidUpto: Date,
  },
  Insurance: {
    PolicyNo: String,
    ValidFrom: Date,
    ValidUpto: Date,
  },
  PUC: {
    PUCNo: String,
    PUCFromDate: Date,
    PUCToDate: Date,
  },
  Documents: {
    RCDocument: String,
    FitnessDocument: String,
    RoadTaxDocument: String,
    NationalPermitDocument: String,
    FiveYearPermitDocument: String,
    InsuranceCopy: String,
    PUCDocument: String,
    DrivingLicense: String,
  },
  Tyre: [tyreSchema],
  Battery: {
    BatteryBillNo: String,
    BatteryBillDate: Date,
    BatteryDealerName: String,
    BatteryMakers: String,
    BatteryWarranty: String,
    BatteryWarrantyExpiryDate: Date,
  },
});

// Export the model
module.exports = mongoose.model('Vehicle', vehicleSchema);
