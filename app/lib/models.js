import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    role: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const postCodeToPostCodeSchema = new mongoose.Schema(
  {
    pickup: {
      type: String,
      required: true,
    },
    dropoff: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    }
  },
  { timestamps: true }
);

const zoneChargesSchema = new mongoose.Schema(
  {
    pickup: {
      type: String,
      required: true,
    },
    dropoff: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    }
  },
  { timestamps: true }
);

const chargesPerMileSchema = new mongoose.Schema(
  {
    min: {
      type: Number,
      required: true,
      min: 0,
    },
    max: {
      type: Number,
      required: true,
      min: 0,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    }
  },
  { timestamps: true }
);

const driversSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    Picture: {
      type: String,
    },
    DVLALicense: {
      type: String,
    },
    DriverPCO: {
      type: String,
    },
    DriversNationalInsurance: {
      type: String,
    },
    VehicleLogBook: {
      type: String,
    },
    MOT: {
      type: String,
    },
    InsuranceCertificate: {
      type: String,
    },
    VehiclePCO: {
      type: String,
    },
    VehicleRentalAgreement: {
      type: String,
    }
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const PostCodeToPostCode = mongoose.models.PostCodeToPostCode || mongoose.model("PostCodeToPostCode", postCodeToPostCodeSchema);
export const ZoneCharges = mongoose.models.ZoneCharges || mongoose.model("ZoneCharges", zoneChargesSchema);
export const ChargesPerMile = mongoose.models.ChargesPerMile || mongoose.model("ChargesPerMile", chargesPerMileSchema);
export const Drivers = mongoose.models.Drivers || mongoose.model("Drivers", driversSchema);