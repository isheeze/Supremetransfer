"use server";

import { revalidatePath } from "next/cache";
import { User, PostCodeToPostCode, ZoneCharges, ChargesPerMile, Drivers, Rides } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";
import { z } from 'zod';
import Stripe from "stripe";
import axios from "axios";

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
  console.log('add Drivers triggered... ')
  const { fullName, email, mobile, picture, picture_publickey, DVLALicense, DVLALicense_publickey, DriverPCO, DriverPCO_publickey, DriversNationalInsurance, DriversNationalInsurance_publickey, VehicleLogBook, VehicleLogBook_publickey, MOT, MOT_publickey, InsuranceCertificate, InsuranceCertificate_publickey, VehiclePCO, VehiclePCO_publickey, VehicleRentalAgreement, VehicleRentalAgreement_publickey } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newDrivers = new Drivers({
      fullName,
      email,
      mobile,
      picture,
      picture_publickey,
      DVLALicense,
      DVLALicense_publickey,
      DriverPCO,
      DriverPCO_publickey,
      DriversNationalInsurance,
      DriversNationalInsurance_publickey,
      VehicleLogBook,
      VehicleLogBook_publickey,
      MOT,
      MOT_publickey,
      InsuranceCertificate,
      InsuranceCertificate_publickey,
      VehiclePCO,
      VehiclePCO_publickey,
      VehicleRentalAgreement,
      VehicleRentalAgreement_publickey
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
  const { id, fullName, email, mobile, picture, picture_publickey, DVLALicense, DVLALicense_publickey, DriverPCO, DriverPCO_publickey, DriversNationalInsurance, DriversNationalInsurance_publickey, VehicleLogBook, VehicleLogBook_publickey, MOT, MOT_publickey, InsuranceCertificate, InsuranceCertificate_publickey, VehiclePCO, VehiclePCO_publickey, VehicleRentalAgreement, VehicleRentalAgreement_publickey } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const updateFields = {
      fullName,
      email,
      mobile,
      picture,
      picture_publickey,
      DVLALicense,
      DVLALicense_publickey,
      DriverPCO,
      DriverPCO_publickey,
      DriversNationalInsurance,
      DriversNationalInsurance_publickey,
      VehicleLogBook,
      VehicleLogBook_publickey,
      MOT,
      MOT_publickey,
      InsuranceCertificate,
      InsuranceCertificate_publickey,
      VehiclePCO,
      VehiclePCO_publickey,
      VehicleRentalAgreement,
      VehicleRentalAgreement_publickey
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
// rides
export const addRides = async (formData) => {
  console.log('add Drivers triggered... ')
  const { pickup, via1, via2, dropoff, direction, pickupTime, returnTime, passengers, luggage, infantSeat, babySeat, boosterSeat, price, vehicle, clientName, clientPhone, clientEmail, note, airline, arrivalFlightNumber, flightArrivalTime, terminal } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newRides = new Rides({
      pickup,
      via1,
      via2,
      dropoff,
      direction,
      pickupTime,
      returnTime,
      passengers,
      luggage,
      infantSeat,
      babySeat,
      boosterSeat,
      price,
      vehicle,
      clientName,
      clientPhone,
      clientEmail,
      note,
      airline,
      arrivalFlightNumber,
      flightArrivalTime,
      terminal
    });

    await newRides.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create Rides!");
  }

  revalidatePath("/dashboard/rides");
  redirect("/dashboard/rides");
};

export const updateRides = async (formData) => {
  const { id, pickup, via1, via2, dropoff, direction, pickupTime, returnTime, passengers, luggage, infantSeat, babySeat, boosterSeat, price, vehicle, clientName, clientPhone, clientEmail, note, airline, arrivalFlightNumber, flightArrivalTime, terminal } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const updateFields = {
      pickup,
      via1,
      via2,
      dropoff,
      direction,
      pickupTime,
      returnTime,
      passengers,
      luggage,
      infantSeat,
      babySeat,
      boosterSeat,
      price,
      vehicle,
      clientName,
      clientPhone,
      clientEmail,
      note,
      airline,
      arrivalFlightNumber,
      flightArrivalTime,
      terminal
    }

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await Rides.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update Rides!");
  }

  revalidatePath("/dashboard/rides");
  redirect("/dashboard/rides");
};

export const deleteRides = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Rides.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete Rides!");
  }

  revalidatePath("/dashboard/rides");
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

export const payment = async (formData, successUrl) => {
  const stripe = new Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
  var session = ""
  try {
    const price = formData.get('totalPrice')
    const date = new Date().toISOString();

    session = await stripe.checkout.sessions.create({
        line_items: [
        {
            price_data: {
            currency: "gbp",
            product_data: {
                name: "Ride-" + date,
            },
            unit_amount: price * 100 || 100,
            },
            quantity: 1,
        },
        ],
        mode: "payment",
        success_url: successUrl,
        cancel_url: `http://localhost:3000/?canceled=true`,
    });
  } catch (err) {
    console.log({ error: "Error checkout session" });
  }
  if(session.id){
    redirect(`/api/stripe/${session.id}`)
  }
}
export const fetchZoneChargesByZone = async (p, d) => {


  try {
    connectToDB();
    const count = await ZoneCharges.find({ $or: [{ pickup: p}, {dropoff: d}] }).count();
    const zoneCharges = await ZoneCharges.find({ $or: [{ pickup: p}, {dropoff: d}] });
    return zoneCharges;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch ZoneCharges!");
  }
};
export const pricedFleet = async (formData) => {
  const zoneCharges = await fetchZoneChargesByZone(formData.get('pickup'),formData.get('pickup'))

  if(zoneCharges){
    formData.set("zoneCharges", zoneCharges[0].price)
    console.log(formData)
  }

  var query = `/order?`
  for(var pair of formData.entries()){
    query += `${pair[0]}= ${pair[1]}&`
  }
  redirect(query)
}
export const orderHandler = async (formData) => {
  var query = `/confirmation?`
  for(var pair of formData.entries()){
    query += `${pair[0]}= ${pair[1]}&`
  }
  if(formData.get('payment') == 'Cash Payment'){ 
    redirect(query)
  }else{
    payment(formData, 'localhost:3000'+query)
  }
}

const distance = async (originLat, originLng, distinationLat, distinationLng) => {
  const url = 'https://routes.googleapis.com/distanceMatrix/v2:computeRouteMatrix';
  const headers = {
    'X-Goog-Api-Key': 'AIzaSyDZLZ7lGMz9xDLBFhp9mpV9R50X44I9T04',
    'Content-Type': 'application/json',
    'X-Goog-FieldMask': 'originIndex,destinationIndex,duration,distanceMeters,status,condition'
  }
  const data = {
    origins: [
      {
        waypoint: {
          location: {
            latLng: {
              latitude: originLat,
              longitude: originLng,
            },
          },
        },
        routeModifiers: { avoid_ferries: true },
      },
    ],
    destinations: [
      {
        waypoint: {
          location: {
            latLng: {
              latitude: distinationLat,
              longitude: distinationLng,
            },
          },
        },
      },
    ],
    travelMode: "DRIVE"
  };
  const dis = await axios.post(url, data, { headers })
  return dis
};
function toTwoDigits( value, dp ){
  return +parseFloat(value).toFixed( dp );
}
export async function handleRide(prevState, formData) {
  const schema = z.object({
    pickupAddress: z.string().min(1, {message: "Select pick up address"}),
    dropoffAddress: z.string().min(1, {message: "Select drop off address"}),
    pickupTime: z.string().min(1, {message: "Select pick up time"}),
  });
  try {
    const parsedData = schema.parse({
      pickupAddress: formData.get("pickupAddress"),
      dropoffAddress: formData.get("dropoffAddress"),
      pickupTime: formData.get("pickupTime"),
    });

    var price

    if(!(formData.get('via1Address') || formData.get('via2Address'))){
      if(formData.get('pickupZipcode') && formData.get('dropoffZipcode')){
        const p = formData.get('pickupZipcode').split(" ")
        const d = formData.get('dropoffZipcode').split(" ")
        connectToDB();
        const postCodeToPostCode = await PostCodeToPostCode.find({pickup: p[0], dropoff: d[0]})
        if(postCodeToPostCode.length){
          price = postCodeToPostCode[0].price
        }else{
          const dis = await distance(formData.get('pickupLat'),formData.get('pickupLng'),formData.get('dropoffLat'),formData.get('dropoffLng'))
          if(dis){
            const miles = dis.data[0].distanceMeters*0.000621371192;
            connectToDB();
            const chargesPerMile = await ChargesPerMile.find({min: {$lte: miles}, max: {$gte: miles}})
            if(chargesPerMile.length){
              price = toTwoDigits(chargesPerMile[0].price * miles, 2)
            }
          }
        }
      }else{
        const dis = await distance(formData.get('pickupLat'),formData.get('pickupLng'),formData.get('dropoffLat'),formData.get('dropoffLng'))
        if(dis){
          const miles = dis.data[0].distanceMeters*0.000621371192;
          connectToDB();
          const chargesPerMile = await ChargesPerMile.find({min: {$lte: miles}, max: {$gte: miles}})
          if(chargesPerMile.length){
            price = toTwoDigits(chargesPerMile[0].price * miles, 2)
          }
        }
      }
    }else{
      if(formData.get('via1Address') && formData.get('via2Address')){
        var dis = await distance(formData.get('pickupLat'),formData.get('pickupLng'),formData.get('via1Lat'),formData.get('via1Lng'))
        var miles = dis.data[0].distanceMeters*0.000621371192;
        dis = await distance(formData.get('via1Lat'),formData.get('via1Lng'),formData.get('via2Lat'),formData.get('via2Lng'))
        miles += dis.data[0].distanceMeters*0.000621371192;
        dis = await distance(formData.get('via2Lat'),formData.get('via2Lng'),formData.get('dropoffLat'),formData.get('dropoffLng'))
        miles += dis.data[0].distanceMeters*0.000621371192;
        
        const chargesPerMile = await ChargesPerMile.find({min: {$lte: miles}, max: {$gte: miles}})

        if(chargesPerMile.length){
          price = toTwoDigits(chargesPerMile[0].price * miles, 2)
        }
      }else{
        if(formData.get('via1Address')){
          var dis = await distance(formData.get('pickupLat'),formData.get('pickupLng'),formData.get('via1Lat'),formData.get('via1Lng'))
          var miles = dis.data[0].distanceMeters*0.000621371192;
          dis = await distance(formData.get('via1Lat'),formData.get('via1Lng'),formData.get('dropoffLat'),formData.get('dropoffLng'))
          miles += dis.data[0].distanceMeters*0.000621371192;
          
          const chargesPerMile = await ChargesPerMile.find({min: {$lte: miles}, max: {$gte: miles}})

          if(chargesPerMile.length){
            price = toTwoDigits(chargesPerMile[0].price * miles, 2)
          }
        }else{
          var dis = await distance(formData.get('pickupLat'),formData.get('pickupLng'),formData.get('via2Lat'),formData.get('via2Lng'))
          var miles = dis.data[0].distanceMeters*0.000621371192;
          dis = await distance(formData.get('via2Lat'),formData.get('via2Lng'),formData.get('dropoffLat'),formData.get('dropoffLng'))
          miles += dis.data[0].distanceMeters*0.000621371192;
          
          const chargesPerMile = await ChargesPerMile.find({min: {$lte: miles}, max: {$gte: miles}})

          if(chargesPerMile.length){
            price = toTwoDigits(chargesPerMile[0].price * miles, 2)
          }
        }
      }
    }

  } catch (error) {
    console.log('errors: ', error)
    if(error.errors){
      return { errors: error.errors };
    }else{
      return { errors: [error]}
    }
  }
  if(price){
    var query = `/fleet/${price}?`
    for(var pair of formData.entries()){
      query += `${pair[0]}= ${pair[1]}&`
    }
    redirect(query)
  }
  revalidatePath("/");
}

