const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  managerId: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
  },
  contact: {
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    portfolio: String,
    emergencyPhone: {
      type: String,
      required: true,
    },
    instagramURL: String,
    facebookURL: String,
    twitterURL: String,
    snapChat: String,
  },
  kyc: {
    PAN: {
      type: String,
      required: true,
    },
    AADHAR: {
      type: String,
      required: true,
    },
  },
  onBoardingDetails: {
    hiredThrough: {
      type: String,
      enum: ['COMPANY_PORTAL', 'REFERNCE', 'CAMPUS_PLACEMENT'],
      required: true,
    },
    dateOfJoining: {
      type: String,
      required: true,
    },
  },
  loginCredentials: {
    loginID: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  compensation: {
    salary: {
      type: String,
      required: true,
    },
    perks: {
      type: String,
      required: true,
    },
  },
  employmentStatus: {
    type: String,
    enum: ['ACTIVE', 'ON_LEAVE', 'TERMINATED'],
    required: true,
  },
  employeeAssetsAllocations: {
    deskId: mongoose.Schema.Types.ObjectId,
    chairId: mongoose.Schema.Types.ObjectId,
    PCAlloted: Boolean,
    PC_ID: mongoose.Schema.Types.ObjectId,
    lockerAlloted: Boolean,
    lockerID: mongoose.Schema.Types.ObjectId,
  },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
