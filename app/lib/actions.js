"use server";

import { revalidatePath } from "next/cache";
import { User, PostCodeToPostCode, ZoneCharges, ChargesPerMile, Drivers } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, role, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      role,
      isActive,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, role, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      role,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/users");
};
// PostCodeToPostCode
export const addPostCodeToPostCode = async (formData) => {
  const { pickup, dropoff, price } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newPostCodeToPostCode = new PostCodeToPostCode({
      pickup,
      dropoff,
      price,
    });

    await newPostCodeToPostCode.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create PostCodeToPostCode!");
  }

  revalidatePath("/dashboard/postCodeToPostCode");
  redirect("/dashboard/postCodeToPostCode");
};

export const updatePostCodeToPostCode = async (formData) => {
  const { id, pickup, dropoff, price } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      pickup,
      dropoff,
      price,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await PostCodeToPostCode.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update PostCodeToPostCode!");
  }

  revalidatePath("/dashboard/postCodeToPostCode");
  redirect("/dashboard/postCodeToPostCode");
};

export const deletePostCodeToPostCode = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await PostCodeToPostCode.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete PostCodeToPostCode!");
  }

  revalidatePath("/dashboard/postCodeToPostCode");
};

// ZoneCharges
export const addZoneCharges = async (formData) => {
  const { pickup, dropoff, price } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newZoneCharges = new ZoneCharges({
      pickup,
      dropoff,
      price
    });

    await newZoneCharges.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create ZoneCharges!");
  }

  revalidatePath("/dashboard/zoneCharges");
  redirect("/dashboard/zoneCharges");
};

export const updateZoneCharges = async (formData) => {
  const { id, pickup, dropoff, price } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      pickup,
      dropoff,
      price
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await ZoneCharges.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update ZoneCharges!");
  }

  revalidatePath("/dashboard/zoneCharges");
  redirect("/dashboard/zoneCharges");
};

export const deleteZoneCharges = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await ZoneCharges.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete ZoneCharges!");
  }

  revalidatePath("/dashboard/zoneCharges");
};

// ChargesPerMile
export const addChargesPerMile = async (formData) => {
  const { min, max, price } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newChargesPerMile = new ChargesPerMile({
      min,
      max,
      price,
    });

    await newChargesPerMile.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create ChargesPerMile!");
  }

  revalidatePath("/dashboard/chargesPerMile");
  redirect("/dashboard/chargesPerMile");
};

export const updateChargesPerMile = async (formData) => {
  const { id, min, max, price } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      min,
      max,
      price,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await ChargesPerMile.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update ChargesPerMile!");
  }

  revalidatePath("/dashboard/chargesPerMile");
  redirect("/dashboard/chargesPerMile");
};

export const deleteChargesPerMile = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await ChargesPerMile.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete ChargesPerMile!");
  }

  revalidatePath("/dashboard/chargesPerMile");
};

// Drivers
export const addDrivers = async (formData) => {
  const { fullName, email, mobile, picture, DVLALicense, DriverPCO, DriversNationalInsurance, VehicleLogBook, MOT, InsuranceCertificate, VehiclePCO, VehicleRentalAgreement } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newDrivers = new Drivers({
      fullName,
      email,
      mobile,
      picture,
      DVLALicense,
      DriverPCO,
      DriversNationalInsurance,
      VehicleLogBook,
      MOT,
      InsuranceCertificate,
      VehiclePCO,
      VehicleRentalAgreement
    });

    await newDrivers.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create Drivers!");
  }

  revalidatePath("/dashboard/drivers");
  redirect("/dashboard/drivers");
};

export const updateDrivers = async (formData) => {
  const { id, fullName, email, mobile, picture, DVLALicense, DriverPCO, DriversNationalInsurance, VehicleLogBook, MOT, InsuranceCertificate, VehiclePCO, VehicleRentalAgreement } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      fullName,
      email,
      mobile,
      picture,
      DVLALicense,
      DriverPCO,
      DriversNationalInsurance,
      VehicleLogBook,
      MOT,
      InsuranceCertificate,
      VehiclePCO,
      VehicleRentalAgreement
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Drivers.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update Drivers!");
  }

  revalidatePath("/dashboard/drivers");
  redirect("/dashboard/drivers");
};

export const deleteDrivers = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Drivers.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete Drivers!");
  }

  revalidatePath("/dashboard/drivers");
};

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};
