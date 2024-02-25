import { User, PostCodeToPostCode, ZoneCharges, ChargesPerMile, Drivers } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 10;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
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

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await PostCodeToPostCode.find({ $or: [ {pickup: { $regex: regex }}, {dropoff: { $regex: regex }}] }).count();
    const postCodeToPostCode = await PostCodeToPostCode.find({ $or: [ {pickup: { $regex: regex }}, {dropoff: { $regex: regex }}] })
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

// ZoneCharges
export const fetchZoneCharges = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await ZoneCharges.find({ $or: [ { pickup: { $regex: regex }}, {dropoff: { $regex: regex }}] }).count();
    const zoneCharges = await ZoneCharges.find({ $or: [ { pickup: { $regex: regex }}, {dropoff: { $regex: regex }}] })
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

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await ChargesPerMile.find({ $or: [ {min: { $regex: regex }}, {max: { $regex: regex }}] }).count();
    const chargesPerMiles = await ChargesPerMile.find({ $or: [ {min: { $regex: regex }}, {max: { $regex: regex }}] })
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

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await Drivers.find({ fullName: { $regex: regex } }).count();
    const drivers = await Drivers.find({ fullName: { $regex: regex } })
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
