import { User, PostCodeToPostCode, ParkingCharges, ZoneCharges, ChargesPerMile, Drivers, Rides, ExtraPrices } from "./models";
import { connectToDB } from "./utils";
import mongoose from 'mongoose'

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 30;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .sort({createdAt: -1})
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

// postcodetopostcode
export const fetchPostCodeToPostCodes = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 30;

  try {
    connectToDB();
    const count = await PostCodeToPostCode.find({ $or: [ {pickup: { $regex: regex }}, {dropoff: { $regex: regex }}] }).count();
    const postCodeToPostCode = await PostCodeToPostCode.find({ $or: [ {pickup: { $regex: regex }}, {dropoff: { $regex: regex }}] })
      .sort({createdAt: -1})
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, postCodeToPostCode };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch ptops!");
  }
};

export const fetchPostCodeToPostCode = async (id) => {
  try {
    connectToDB();
    const ptop = await PostCodeToPostCode.findById(id);
    return ptop;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch ptop!");
  }
};

// ParkingCharges
export const fetchParkingCharges = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 30;

  try {
    connectToDB();
    const count = await ParkingCharges.find({ $or: [ { pickup: { $regex: regex }}, {dropoff: { $regex: regex }}] }).count();
    const parkingCharges = await ParkingCharges.find({ $or: [ { pickup: { $regex: regex }}, {dropoff: { $regex: regex }}] })
      .sort({createdAt: -1})
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, parkingCharges };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch ParkingCharges!");
  }
};

export const fetchParkingCharge = async (id) => {
  try {
    connectToDB();
    const parkingCharges = await ParkingCharges.findById(id);
    return parkingCharges;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch ParkingCharges!");
  }
};

// ZoneCharges
export const fetchZoneCharges = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 30;

  try {
    connectToDB();
    const count = await ZoneCharges.find({ zone: { $regex: regex }}).count();
    const zoneCharges = await ZoneCharges.find({ zone: { $regex: regex }})
      .sort({createdAt: -1})
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, zoneCharges };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch ZoneCharges!");
  }
};

export const fetchZoneCharge = async (id) => {
  try {
    connectToDB();
    const zoneCharges = await ZoneCharges.findById(id);
    return zoneCharges;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch zoneCharge!");
  }
};

// ChargesPerMile
export const fetchChargesPerMiles = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 30;

  try {
    connectToDB();
    const count = await ChargesPerMile.find().count();
    const chargesPerMiles = await ChargesPerMile.find()
      .sort({createdAt: -1})
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, chargesPerMiles };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch ChargesPerMiles!");
  }
};

export const fetchChargesPerMile = async (id) => {
  try {
    connectToDB();
    const chargesPerMile = await ChargesPerMile.findById(id);
    return chargesPerMile;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch chargesPerMile!");
  }
};

// Drivers
export const fetchDrivers = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 30;

  try {
    connectToDB();
    const count = await Drivers.find({ fullName: { $regex: regex } }).count();
    const drivers = await Drivers.find({ fullName: { $regex: regex } })
      .sort({createdAt: -1})
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, drivers };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Drivers!");
  }
};

export const fetchDriver = async (id) => {
  try {
    connectToDB();
    const driver = await Drivers.findById(id);
    return driver;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Driver!");
  }
};

// Rides
export const fetchRides = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 30;

  try {
    connectToDB();
    
    var count
    var rides
    if(mongoose.isValidObjectId(q)){
      count = await Rides.findById(q).count();
      rides = await Rides.findById(q)
      rides = new Array(rides)
    }else{
      count = await Rides.find({ clientName: { $regex: regex } }).count();
      rides = await Rides.find({ clientName: { $regex: regex } })
      .sort({createdAt: -1})
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    }
    return { count, rides };
  } catch (err) {
    console.log(err);
    return {count: 0, rides:[]}
    //throw new Error("Failed to fetch Rides!");
  }
};

export const fetchRide = async (id) => {
  try {
    connectToDB();
    const driver = await Rides.findById(id);
    return driver;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Ride!");
  }
};

export const fetchDraftRides = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 30;

  try {
    connectToDB();
    

    var count
    var rides
    if(mongoose.isValidObjectId(q)){
      count = await Rides.findById(q).count();
      rides = await Rides.findById(q)
      rides = new Array(rides)
    }else{
      count = await Rides.find({ $and: [ { $or: [ { pickupAddress: { $regex: regex } }, { dropoffAddress: { $regex: regex } }]}, {status: 'draft'}] }).count();
      rides = await Rides.find({ $and: [ { $or: [ { pickupAddress: { $regex: regex } }, { dropoffAddress: { $regex: regex } }]}, {status: 'draft'}] })
      .sort({createdAt: -1})
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    }
    return { count, rides };
  } catch (err) {
    console.log(err);
    return {count: 0, rides:[]}
    //throw new Error("Failed to fetch Rides!");
  }
};

// extraPrices
export const fetchExtraPrices = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 30;

  try {
    connectToDB();
    const count = await ExtraPrices.find({title: { $regex: regex }}).count();
    const extraPrices = await ExtraPrices.find({title: { $regex: regex }})
      .sort({createdAt: -1})
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, extraPrices };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch ptops!");
  }
};

export const fetchExtraPrice = async (id) => {
  try {
    connectToDB();
    const ptop = await ExtraPrices.findById(id);
    return ptop;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch ptop!");
  }
};

// DUMMY DATA

export const cards = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];
