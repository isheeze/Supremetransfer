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
    picture: {
      type: String,
    },
    picture_publickey: {
      type: String,
    },
    DVLALicense: {
      type: String,
    },
    DVLALicense_publickey: {
      type: String,
    },
    DriverPCO: {
      type: String,
    },
    DriverPCO_publickey: {
      type: String,
    },
    DriversNationalInsurance: {
      type: String,
    },
    DriversNationalInsurance_publickey: {
      type: String,
    },
    VehicleLogBook: {
      type: String,
    },
    VehicleLogBook_publickey: {
      type: String,
    },
    MOT: {
      type: String,
    },
    MOT_publickey: {
      type: String,
    },
    InsuranceCertificate: {
      type: String,
    },
    InsuranceCertificate_publickey: {
      type: String,
    },
    VehiclePCO: {
      type: String,
    },
    VehiclePCO_publickey: {
      type: String,
    },
    VehicleRentalAgreement: {
      type: String,
    },
    VehicleRentalAgreement_publickey: {
      type: String,
    }
  },
  { timestamps: true }
);

const ridesSchema = new mongoose.Schema(
  {
    pickupAddress: {
      type: String,
      required: true,
    },
    via1Address: {
      type: String,
    },
    via2Address: {
      type: String,
    },
    dropoffAddress: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
    },
    pickupTime: {
      type: String,
    },
    returnTime: {
      type: String,
    },
    passenger: {
      type: String,
    },
    luggage: {
      type: String,
    },
    infantSeat: {
      type: String,
    },
    babySeat: {
      type: String,
    },
    boosterSeat: {
      type: String,
    },
    price: {
      type: String,
    },
    vehicle: {
      type: String,
    },
    clientName: {
      type: String,
    },
    clientPhone: {
      type: String,
    },
    clientEmail: {
      type: String,
    },
    note: {
      type: String,
    },
    airline: {
      type: String,
    },
    arrivalFlightNumber: {
      type: String,
    },
    flightArrivalTime: {
      type: String,
    },
    terminal: {
      type: String,
    },
    paymentMethod:{
      type: String,
    },
    status: {
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
export const Rides = mongoose.models.Rides || mongoose.model("Rides", ridesSchema);