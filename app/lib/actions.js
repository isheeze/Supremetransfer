"use server";

import { revalidatePath } from "next/cache";
import { User, PostCodeToPostCode, ParkingCharges, ZoneCharges, ChargesPerMile, Drivers, Rides, ExtraPrices } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";
import { z } from 'zod';
import Stripe from "stripe";
import axios from "axios";
import mongoose from 'mongoose'
import { Configuration, EmailsApi, EmailMessageData } from '@elasticemail/elasticemail-client-ts-axios';

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
  }

  revalidatePath("/dashboard/users");
};
// PostCodeToPostCode
export const addPostCodeToPostCodeFromCSV = async (formData) => {
  for(let i = 0; i < formData.get("COUNT"); i++){
    let formDataCode = new FormData()
    formDataCode.set('pickup', formData.get('pickup-'+i))
    formDataCode.set('dropoff', formData.get('dropoff-'+i))
    formDataCode.set('price', parseFloat(formData.get('price-'+i)))

    formDataCode.set('redirect','1')

    await addPostCodeToPostCode(formDataCode)
  }
  revalidatePath("/dashboard/postCodeToPostCode");
  redirect("/dashboard/postCodeToPostCode");
}
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
  }
  if(!formData.get('redirect')){
    revalidatePath("/dashboard/postCodeToPostCode");
    redirect("/dashboard/postCodeToPostCode");
  }
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
  }

  revalidatePath("/dashboard/postCodeToPostCode");
};

// ParkingCharges
export const addParkingCharges = async (formData) => {
  const { pickup, dropoff, price } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newParkingCharges = new ParkingCharges({
      pickup,
      dropoff,
      price
    });

    await newParkingCharges.save();
  } catch (err) {
    console.log(err);
  }

  revalidatePath("/dashboard/parkingCharges");
  redirect("/dashboard/parkingCharges");
};

export const updateParkingCharges = async (formData) => {
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

    await ParkingCharges.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
  }

  revalidatePath("/dashboard/parkingCharges");
  redirect("/dashboard/parkingCharges");
};

export const deleteParkingCharges = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await ParkingCharges.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }

  revalidatePath("/dashboard/parkingCharges");
};

// ZoneCharges
export const addZoneCharges = async (formData) => {
  const { zone } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newZoneCharges = new ZoneCharges({
      zone
    });

    await newZoneCharges.save();
  } catch (err) {
    console.log(err);
  }

  revalidatePath("/dashboard/zoneCharges");
  redirect("/dashboard/zoneCharges");
};

export const updateZoneCharges = async (formData) => {
  const { id, zone } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      zone
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await ZoneCharges.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
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
  }

  revalidatePath("/dashboard/ChargesPerMile");
  redirect("/dashboard/ChargesPerMile");
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
  }

  revalidatePath("/dashboard/ChargesPerMile");
  redirect("/dashboard/ChargesPerMile");
};

export const deleteChargesPerMile = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await ChargesPerMile.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }

  revalidatePath("/dashboard/ChargesPerMile");
};

// Drivers
export const addDrivers = async (formData) => {
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
  }

  revalidatePath("/dashboard/drivers");
};
// rides
export const addRides = async (formData) => {
  const { pickupAddress, via1Address, via2Address, dropoffAddress, direction, pickupTime, returnTime, passenger, luggage, infantSeat, babySeat, boosterSeat, price, vehicle, clientName, clientPhone, clientEmail, note, airline, arrivalFlightNumber, flightArrivalTime, terminal, paymentMethod, status } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newRides = new Rides({
      pickupAddress,
      via1Address,
      via2Address,
      dropoffAddress,
      direction,
      pickupTime,
      returnTime,
      passenger,
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
      terminal,
      paymentMethod,
      status
    });

    await newRides.save();
  } catch (err) {
    console.log(err);
  }

  revalidatePath("/dashboard/rides");
  redirect("/dashboard/rides");
};
export const addRidesWithId = async (formData) => {
  const { _id, pickupAddress, via1Address, via2Address, dropoffAddress, direction, pickupTime, returnTime, passenger, luggage, infantSeat, babySeat, boosterSeat, price, vehicle, clientName, clientPhone, clientEmail, note, airline, arrivalFlightNumber, flightArrivalTime, terminal, paymentMethod, status } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newRides = new Rides({
      _id,
      pickupAddress,
      via1Address,
      via2Address,
      dropoffAddress,
      direction,
      pickupTime,
      returnTime,
      passenger,
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
      terminal,
      paymentMethod,
      status
    });

    await newRides.save();
    console.log('reached... ')
  } catch (err) {
    console.log(err);
  }

  //revalidatePath("/dashboard/rides");
  //redirect("/dashboard/rides");
};

export const updateRides = async (formData) => {
  const { id, pickupAddress, via1Address, via2Address, dropoffAddress, direction, pickupTime, returnTime, passenger, luggage, infantSeat, babySeat, boosterSeat, price, vehicle, clientName, clientPhone, clientEmail, note, airline, arrivalFlightNumber, flightArrivalTime, terminal, paymentMethod, status } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const updateFields = {
      pickupAddress,
      via1Address,
      via2Address,
      dropoffAddress,
      direction,
      pickupTime,
      returnTime,
      passenger,
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
      terminal,
      paymentMethod,
      status
    }

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await Rides.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
  }

  revalidatePath("/dashboard/rides");
  redirect("/dashboard/rides");
};

export const changeStatusRides = async (id, status) => {

  try {
    connectToDB();
    const updateFields = {
      status
    }

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await Rides.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
};

export const deleteRides = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Rides.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }

  revalidatePath("/dashboard/rides");
};

export const acceptRide = async (formData) => {
  const { id } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const updateFields = {
      status: 'Accepted'
    }
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await Rides.findByIdAndUpdate(id, updateFields);
    await sendAcceptedEmail(formData)
  } catch (err) {
    console.log(err);
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
}
export const rejectRide = async (formData) => {
  const { id } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const updateFields = {
      status: 'Rejected'
    }

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await Rides.findByIdAndUpdate(id, updateFields);
    await sendRejectedEmail(formData)
  } catch (err) {
    console.log(err);
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
}

// Extra Prices
export const addExtraPrices = async (formData) => {
  const { title, price } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const newUser = new ExtraPrices({
      title,
      price,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
  }

  revalidatePath("/dashboard/extraPrices");
  redirect("/dashboard/extraPrices");
};

export const updateExtraPrices = async (formData) => {
  const { title, price } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      title,
      price,
    }

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await ExtraPrices.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
  }

  revalidatePath("/dashboard/extraPrices");
  redirect("/dashboard/extraPrices");
};

export const deleteExtraPrices = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await ExtraPrices.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }

  revalidatePath("/dashboard/extraPrices");
};



export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    console.log(err)
  }
};

export const payment = async (formData, successUrl) => {
  
  const stripe = new Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
  var session = ""
  try {
    const price = parseFloat(formData.get('totalPrice').trim())
    const date = new Date().toISOString();

    console.log('price: ',price)
    console.log('date:  ',date)

    session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: "gbp",
              product_data: {
                  name: "Ride-"+date,
              },
              unit_amount: Math.round(price * 100) || 100,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: 'https://supremetransfer.vercel.app'+successUrl,
        cancel_url: `https://supremetransfer.vercel.app/?canceled=true`,
    });
  } catch (err) {
    console.log({ error: "Error checkout session: ",err });
  }
  if(session.id){
    redirect(`/api/stripe/${session.id}`)
  }
}
export const pricedFleet = async (formData) => {
  var query = `/order?`
  for(var pair of formData.entries()){
    query += `${pair[0]}= ${pair[1]}&`
  }
  redirect(query)
}
export const orderHandler = async (formData) => {
  var query = `/confirmation?`
  var id = new mongoose.Types.ObjectId()
  
  formData.set("status","draft")
  formData.set("_id",id)

  for(var pair of formData.entries()){
    query += `${pair[0]}= ${pair[1]}&`
  }
  if(formData.get('paymentMethod') == 'Debit/Credit Card'){
    await payment(formData, query)
  }else{
    redirect(query)
  }
}
function validateEmail(email) {
  const re = /^(([^<>()[\\]\\\\.,;:\s@"]+(\.[^<>()[\\]\\\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export const sendRejectedEmail = async (formData) => {
  const config = new Configuration({
      apiKey: '1D309F32AF9DE6046D488EA86F2D703B6DC68846318D7ED99001E7D168893B16426033BA8FAB5FEE2BEBCA78FEF3D0DA'
  });

  var message = `<!DOCTYPE html>
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="x-apple-disable-message-reformatting">
          <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no">
  
          <meta name="color-scheme" content="light">
          <meta name="supported-color-schemes" content="light">
  
          
          <!--[if !mso]><!-->
            
            <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap">
  
            <style type="text/css">
            // TODO: fix me!
              @import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap);
          </style>
          
          <!--<![endif]-->
  
          <!--[if mso]>
            <style>
                // TODO: fix me!
                * {
                    font-family: sans-serif !important;
                }
            </style>
          <![endif]-->
      
          
          <!-- NOTE: the title is processed in the backend during the campaign dispatch -->
          <title></title>
  
          <!--[if gte mso 9]>
          <xml>
              <o:OfficeDocumentSettings>
                  <o:AllowPNG/>
                  <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
          </xml>
          <![endif]-->
          
      <style>
          :root {
              color-scheme: light;
              supported-color-schemes: light;
          }
  
          html,
          body {
              margin: 0 auto !important;
              padding: 0 !important;
              height: 100% !important;
              width: 100% !important;
  
              overflow-wrap: break-word;
              -ms-word-break: break-all;
              -ms-word-break: break-word;
              word-break: break-all;
              word-break: break-word;
          }
  
  
          
    direction: undefined;
    center,
    #body_table {
      
    }
  
    ul, ol {
      padding: 0;
      margin-top: 0;
      margin-bottom: 0;
    }
  
    li {
      margin-bottom: 0;
    }
  
    
  
    .list-block-list-outside-left li {
      margin-left: 20px !important;
    }
  
    .list-block-list-outside-right li {
      margin-right: 20px !important;
    }
  
    
      .paragraph {
        font-size: 15px;
        font-family: Open Sans, sans-serif;
        font-weight: normal;
        font-style: normal;
        text-align: start;
        line-height: 1;
        text-decoration: none;
        color: #5f5f5f;
        
      }
    
  
      .heading1 {
        font-size: 32px;
        font-family: Open Sans, sans-serif;
        font-weight: normal;
        font-style: normal;
        text-align: start;
        line-height: 1;
        text-decoration: none;
        color: #000000;
        
      }
    
  
      .heading2 {
        font-size: 26px;
        font-family: Open Sans, sans-serif;
        font-weight: normal;
        font-style: normal;
        text-align: start;
        line-height: 1;
        text-decoration: none;
        color: #000000;
        
      }
    
  
      .heading3 {
        font-size: 19px;
        font-family: Open Sans, sans-serif;
        font-weight: normal;
        font-style: normal;
        text-align: start;
        line-height: 1;
        text-decoration: none;
        color: #000000;
        
      }
    
  
      .list {
        font-size: 15px;
        font-family: Open Sans, sans-serif;
        font-weight: normal;
        font-style: normal;
        text-align: start;
        line-height: 1;
        text-decoration: none;
        color: #5f5f5f;
        
      }
    
  
    p a, 
    li a {
      
    display: inline-block;  
      color: #5457FF;
      text-decoration: none;
      font-style: normal;
      font-weight: normal;
  
    }
  
    .button-table a {
      text-decoration: none;
      font-style: normal;
      font-weight: normal;
    }
  
    .paragraph > span {text-decoration: none;}.heading1 > span {text-decoration: none;}.heading2 > span {text-decoration: none;}.heading3 > span {text-decoration: none;}.list > span {text-decoration: none;}
  
  
          * {
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
          }
  
          div[style*="margin: 16px 0"] {
              margin: 0 !important;
          }
  
          #MessageViewBody,
          #MessageWebViewDiv {
              width: 100% !important;
          }
  
          table {
              border-collapse: collapse;
              border-spacing: 0;
              mso-table-lspace: 0pt !important;
              mso-table-rspace: 0pt !important;
          }
          table:not(.button-table) {
              border-spacing: 0 !important;
              border-collapse: collapse !important;
              table-layout: fixed !important;
              margin: 0 auto !important;
          }
  
          th {
              font-weight: normal;
          }
  
          tr td p {
              margin: 0;
          }
  
          img {
              -ms-interpolation-mode: bicubic;
          }
  
          a[x-apple-data-detectors],
  
          .unstyle-auto-detected-links a,
          .aBn {
              border-bottom: 0 !important;
              cursor: default !important;
              color: inherit !important;
              text-decoration: none !important;
              font-size: inherit !important;
              font-family: inherit !important;
              font-weight: inherit !important;
              line-height: inherit !important;
          }
  
          .im {
              color: inherit !important;
          }
  
          .a6S {
              display: none !important;
              opacity: 0.01 !important;
          }
  
          img.g-img+div {
              display: none !important;
          }
  
          @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
              u~div .contentMainTable {
                  min-width: 320px !important;
              }
          }
  
          @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
              u~div .contentMainTable {
                  min-width: 375px !important;
              }
          }
  
          @media only screen and (min-device-width: 414px) {
              u~div .contentMainTable {
                  min-width: 414px !important;
              }
          }
      </style>
  
      <style>
          @media only screen and (max-device-width: 640px) {
              .contentMainTable {
                  width: 100% !important;
                  margin: auto !important;
              }
              .single-column {
                  width: 100% !important;
                  margin: auto !important;
              }
              .multi-column {
                  width: 100% !important;
                  margin: auto !important;
              }
              .imageBlockWrapper {
                  width: 100% !important;
                  margin: auto !important;
              }
          }
          @media only screen and (max-width: 640px) {
              .contentMainTable {
                  width: 100% !important;
                  margin: auto !important;
              }
              .single-column {
                  width: 100% !important;
                  margin: auto !important;
              }
              .multi-column {
                  width: 100% !important;
                  margin: auto !important;
              }
              .imageBlockWrapper {
                  width: 100% !important;
                  margin: auto !important;
              }
          }
      </style>
      
      
  <!--[if mso | IE]>
      <style>
          .list-block-outlook-outside-left {
              margin-left: -18px;
          }
      
          .list-block-outlook-outside-right {
              margin-right: -18px;
          }
  
          a:link, span.MsoHyperlink {
              mso-style-priority:99;
              
    display: inline-block;  
      color: #5457FF;
      text-decoration: none;
      font-style: normal;
      font-weight: normal;
  
          }
      </style>
  <![endif]-->
  
  
      </head>
  
      <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #F5F6F8;">
          <center role="article" aria-roledescription="email" lang="en" style="width: 100%; background-color: #F5F6F8;">
              <!--[if mso | IE]>
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" id="body_table" style="background-color: #F5F6F8;">
              <tbody>    
                  <tr>
                      <td>
                      <![endif]-->
                          <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="640" style="margin: auto;" class="contentMainTable">
                          
                       <tr class="wp-block-editor-imageblock-v1">
                          <td style="background-color:#F5F6F8;padding-top:32px;padding-bottom:32px;padding-left:32px;padding-right:32px" align="center">
                             <table align="center" width="374.4" class="imageBlockWrapper" style="width:374.4px" role="presentation">
                                <tbody>
                                   <tr>
                                   <td style="padding:0;display: flex;justify-content: center;align-items: center;"><div style="
                                   font-size: 2rem;
                                   text-align: center;
                               ">Supreme Transfer Ltd.</div></td>
                                   </tr>
                                </tbody>
                             </table>
                          </td>
                       </tr>
                       <tr class="wp-block-editor-headingblock-v1">
                          <td valign="top" style="background-color:#ffffff;display:block;padding-top:64px;padding-right:32px;padding-bottom:32px;padding-left:32px;text-align:center">
                             <p style="font-family:Open Sans, sans-serif;text-align:center;line-height:1.1;font-size:32px;background-color:#ffffff;color:#000000;margin:0;word-break:normal" class="heading1">Thank you for booking with www.supremetransfer.co.uk</p>
                             <p style="text-align: center">Booking Reference No. `+formData.get('id')+`</p>
                          </td>
                       </tr>
                       <tr class="wp-block-editor-headingblock-v1">
                          <td valign="top" style="background-color:#F9FAFB;display:block;padding-top:42px;padding-right:32px;padding-bottom:16px;padding-left:32px;text-align:center">
                             <p style="font-family:Open Sans, sans-serif;text-align:center;line-height:1.1;font-size:30px;background-color:#F9FAFB;color:#ff0000;margin:0;word-break:normal" class="heading3">Your booking has been Rejected</p>
                          </td>
                       </tr>
                       <tr>
                          <td style="padding-top:20px;padding-left:0;padding-right:0;padding-bottom:20px;background-color:#ffffff">
                             <table role="presentation" class="multi-column" style="width:640px;border-collapse:collapse !important" cellpadding="0" cellspacing="0">
                                <tbody>
                                   <tr style="padding-top:20px;padding-left:0;padding-right:0;padding-bottom:20px" class="wp-block-editor-twocolumnsfiftyfiftyblock-v1">
                                      <td style="width:320px;float:left" class="wp-block-editor-column single-column">
                                         <table role="presentation" align="left" border="0" class="single-column" width="320" style="width:320px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0">
                                            <tbody>
                                               <tr class="wp-block-editor-paragraphblock-v1">
                                                  <td valign="top" style="padding:20px 20px 20px 20px;background-color:#ffffff">
                                                     <p class="paragraph" style="font-family:Open Sans, sans-serif;line-height:22.50px;font-size:15px;margin:0;color:#5f5f5f;letter-spacing:0;word-break:normal">`
                                                     var clientName = formData.get('clientName')
                                                     clientName && (message += `<span style="font-weight: bold" class="bold">Name: </span>`+clientName.trim()+`<br>`)
                                                     var clientEmail = formData.get('clientEmail')
                                                     clientEmail && (message += `<span style="font-weight: bold" class="bold">Email: </span>`+clientEmail.trim()+`<br>`)
                                                     var clientPhone = formData.get('clientPhone')
                                                     clientPhone && (message += `<span style="font-weight: bold" class="bold">Phone: </span>`+clientPhone.trim()+`<br>`)
                                                     var direction = formData.get('direction')
                                                     direction && (message += `<span style="font-weight: bold" class="bold">Ride: </span>`+direction.trim()+`<br>`)
                                                     var vehicle = formData.get('vehicle')
                                                     vehicle && (message += `<span style="font-weight: bold" class="bold">Vehicle: </span>`+vehicle.trim()+`<br>`)
                                                  message += `</td>
                                               </tr>
                                            </tbody>
                                         </table>
                                      </td>
                                      <td style="width:320px;float:left" class="wp-block-editor-column single-column">
                                         <table role="presentation" align="right" border="0" class="single-column" width="320" style="width:320px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0">
                                            <tbody>
                                               <tr class="wp-block-editor-paragraphblock-v1">
                                                  <td valign="top" style="padding:20px 20px 20px 20px;background-color:#ffffff">
                                                     <p class="paragraph" style="font-family:Open Sans, sans-serif;line-height:22.50px;font-size:15px;margin:0;color:#5f5f5f;letter-spacing:0;word-break:normal">`
                                                     var passenger = formData.get('passenger')
                                                     passenger && (message += `<span style="font-weight: bold" class="bold">Passengers: </span>`+passenger.trim()+`<br>`)
                                                     var luggage = formData.get('luggage')
                                                     luggage && (message += `<span style="font-weight: bold" class="bold">Luggage: </span>`+luggage.trim()+`<br>`)
                                                     /*var infantSeat = formData.get('infantSeatPrice')
                                                     { message += `<span style="font-weight: bold" class="bold">Infant Seats: </span>`+infantSeat.trim()+`<br>`}
                                                     var babySeat = formData.get('babySeatPrice')
                                                     { message += `<span style="font-weight: bold" class="bold">Baby Seats: </span>`+babySeat.trim()+`<br>`}
                                                     var boosterSeat = formData.get('boosterSeatPrice')
                                                     { message += `<span style="font-weight: bold" class="bold">Booster Seats: </span>`+boosterSeat.trim()+`<br>`}
                                                     */var note = formData.get('note')
                                                     note && (message += `<span style="font-weight: bold" class="bold">Note: </span>`+note.trim()+`<br>`)
                                                  message += `</td>
                                               </tr>
                                            </tbody>
                                         </table>
                                      </td>
                                   </tr>
                                </tbody>
                             </table>
                          </td>
                       </tr>
                       <tr class="wp-block-editor-dividerblock-v1" align="center" valign="top">
                          <td style="padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;background-color:#ffffff">
                             <div style="background:#718096;font-size:1px;line-height:1px;border:0">&nbsp;</div>
                          </td>
                       </tr>
                       <tr>
                          <td style="padding-top:20px;padding-left:0;padding-right:0;padding-bottom:20px;background-color:#ffffff">
                             <table role="presentation" class="multi-column" style="width:640px;border-collapse:collapse !important" cellpadding="0" cellspacing="0">
                                <tbody>
                                   <tr style="padding-top:20px;padding-left:0;padding-right:0;padding-bottom:20px" class="wp-block-editor-twocolumnsfiftyfiftyblock-v1">
                                      <td style="width:320px;float:left" class="wp-block-editor-column single-column">
                                         <table role="presentation" align="left" border="0" class="single-column" width="320" style="width:320px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0">
                                            <tbody>
                                               <tr class="wp-block-editor-paragraphblock-v1">
                                                  <td valign="top" style="padding:20px 20px 20px 20px;background-color:#ffffff">

                                                     <p class="paragraph" style="font-family:Open Sans, sans-serif;line-height:22.50px;font-size:15px;margin:0;color:#5f5f5f;letter-spacing:0;word-break:normal">`
                                                     var pickupAddress = formData.get('pickupAddress')
                                                     pickupAddress && (message += `<span style="font-weight: bold" class="bold">Pickup: </span>`+pickupAddress.trim()+`<br>`)
                                                     var pickupTime = formData.get('pickupTime')
                                                     pickupTime && (message += `<span style="font-weight: bold" class="bold">Pickup Time: </span>`+pickupTime.trim()+`<br>`)
                                                     var via1Address = formData.get('via1Address')
                                                     via1Address && (message += `<span style="font-weight: bold" class="bold">Via: </span>`+via1Address.trim()+`<br>`)
                                                     var via2Address = formData.get('via2Address')
                                                     via2Address && (message += `<span style="font-weight: bold" class="bold">Via: </span>`+via2Address.trim()+`<br>`)
                                                     var airline = formData.get('airline')
                                                     airline && (message += `<span style="font-weight: bold" class="bold">Airline: </span>`+airline.trim()+`<br>`)
                                                     var arrivalFlightNumber = formData.get('arrivalFlightNumber')
                                                     arrivalFlightNumber && (message += `<span style="font-weight: bold" class="bold">Flight Number: </span>`+arrivalFlightNumber.trim()+`<br>`)
                                                     var flightArrivalTime = formData.get('flightArrivalTime')
                                                     flightArrivalTime && (message += `<span style="font-weight: bold" class="bold">Flight Time: </span>`+flightArrivalTime.trim()+`<br>`)
                                                     var terminal = formData.get('terminal')
                                                     terminal && (message += `<span style="font-weight: bold" class="bold">Terminal: </span>`+terminal.trim()+`<br>`)
                                                  message += `</td>
                                               </tr>
                                            </tbody>
                                         </table>
                                      </td>
                                      <td style="width:320px;float:left" class="wp-block-editor-column single-column">
                                         <table role="presentation" align="right" border="0" class="single-column" width="320" style="width:320px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0">
                                            <tbody>
                                               <tr class="wp-block-editor-paragraphblock-v1">
                                                  <td valign="top" style="padding:20px 20px 20px 20px;background-color:#ffffff">
                                                     <p class="paragraph" style="font-family:Open Sans, sans-serif;line-height:22.50px;font-size:15px;margin:0;color:#5f5f5f;letter-spacing:0;word-break:normal">`
                                                     var dropoffAddress = formData.get('dropoffAddress')
                                                     dropoffAddress && (message += `<span style="font-weight: bold" class="bold">Drop off: </span>`+dropoffAddress.trim()+`<br>`)
                                                     var returnTime = formData.get('returnTime')
                                                     returnTime && (message += `<span style="font-weight: bold" class="bold">Return Time: </span>`+returnTime.trim()+`<br>`)
                                                  message += `</td>
                                               </tr>
                                            </tbody>
                                         </table>
                                      </td>
                                   </tr>
                                </tbody>
                             </table>
                          </td>
                       </tr>
                       <tr class="wp-block-editor-dividerblock-v1" align="center" valign="top">
                          <td style="padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;background-color:#ffffff">
                             <div style="background:#718096;font-size:1px;line-height:1px;border:0">&nbsp;</div>
                          </td>
                       </tr>
                       <tr>
                          <td style="padding-top:20px;padding-left:0;padding-right:0;padding-bottom:20px;background-color:#ffffff">
                             <table role="presentation" class="multi-column" style="width:640px;border-collapse:collapse !important" cellpadding="0" cellspacing="0">
                                <tbody>
                                   <tr style="padding-top:20px;padding-left:0;padding-right:0;padding-bottom:20px" class="wp-block-editor-twocolumnsfiftyfiftyblock-v1">
                                      <td style="width:320px;float:left" class="wp-block-editor-column single-column">
                                         <table role="presentation" align="left" border="0" class="single-column" width="320" style="width:320px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0">
                                            <tbody>
                                               <tr class="wp-block-editor-paragraphblock-v1">
                                                  <td valign="top" style="padding:20px 20px 20px 20px;background-color:#ffffff">
                                                     <p class="paragraph" style="font-family:Open Sans, sans-serif;line-height:22.50px;font-size:15px;margin:0;color:#5f5f5f;letter-spacing:0;word-break:normal">`
                                                     var paymentMethod = formData.get('paymentMethod')
                                                     paymentMethod && (message += `<span style="font-weight: bold" class="bold">Payment Method: </span>`+paymentMethod.trim()+`<br>`)
                                                  message += `</td>
                                               </tr>
                                            </tbody>
                                         </table>
                                      </td>
                                      <td style="width:320px;float:left" class="wp-block-editor-column single-column">
                                         <table role="presentation" align="right" border="0" class="single-column" width="320" style="width:320px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0">
                                            <tbody>
                                               <tr class="wp-block-editor-paragraphblock-v1">
                                                  <td valign="top" style="padding:20px 20px 20px 20px;background-color:#ffffff">
                                                     <p class="paragraph" style="font-family:Open Sans, sans-serif;line-height:22.50px;font-size:15px;margin:0;color:#5f5f5f;varter-spacing:0;word-break:normal">`
                                                     let totalPrice = formData.get('totalPrice')
                                                     totalPrice && (message += `<span style="font-weight: bold" class="bold">Price: </span>`+totalPrice.trim()+`<br>`)
                                                  message += `</td>
                                               </tr>
                                            </tbody>
                                         </table>
                                      </td>
                                   </tr>
                                </tbody>
                             </table>
                          </td>
                       </tr>
                       <tr class="wp-block-editor-headingblock-v1">
                          <td valign="top" style="background-color:#ffffff;display:block;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;text-align:center">
                             <p style="font-family:Open Sans, sans-serif;text-align:center;line-height:NaNpx;letter-spacing:0;font-size:32px;background-color:#ffffff;color:#000000;margin:0;word-break:normal" class="heading1">Thank You</p>
                          </td>
                       </tr>
                       <tr class="wp-block-editor-headingblock-v1">
                          <td valign="top" style="background-color:#F9FAFB;display:block;padding-top:42px;padding-right:32px;padding-bottom:16px;padding-left:32px;text-align:center">
                             <p style="font-family:Open Sans, sans-serif;text-align:center;line-height:21.85px;letter-spacing:0;font-size:19px;background-color:#F9FAFB;color:#000000;margin:0;word-break:normal" class="heading3">Orders are subject to our current terms &amp; conditions. We welcome all comments on the services that we provide. <br></p>
                          </td>
                       </tr>
                          </table>
                      <!--[if mso | IE]>
                      </td>
                  </tr>
              </tbody>
              </table>
              <![endif]-->
          </center>
      </body>
  </html>`
  
  const emailsApi = new EmailsApi(config);

  const email = decodeURI(clientEmail.trim())
  
  const emailMessageData = {
      Recipients: [
        { 
          Email: email
        },
        { 
          Email: 'info@supremetransfer.co.uk'
        }
      ],
      Content: {
        Body: [
          {
            ContentType: "HTML",
            Charset: "utf-8",
            Content: message
          },
        ],
        From: "info@supremetransfer.co.uk",
        Subject: "Rejected booking id "+formData.get('id')
      }
    };
  
  const sendBulkEmails = (emailMessageData) => {
    emailsApi.emailsPost(emailMessageData).then((response) => {
        console.log('API called successfully.');
        console.log(response.data);
    }).catch((error) => {
        console.error(error);
    });
  };
  
  sendBulkEmails(emailMessageData)
}
export const sendAcceptedEmail = async (formData) => {
  const config = new Configuration({
      apiKey: '1D309F32AF9DE6046D488EA86F2D703B6DC68846318D7ED99001E7D168893B16426033BA8FAB5FEE2BEBCA78FEF3D0DA'
  });

  var message = `<!DOCTYPE html>
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="x-apple-disable-message-reformatting">
          <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no">
  
          <meta name="color-scheme" content="light">
          <meta name="supported-color-schemes" content="light">
  
          
          <!--[if !mso]><!-->
            
            <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap">
  
            <style type="text/css">
            // TODO: fix me!
              @import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap);
          </style>
          
          <!--<![endif]-->
  
          <!--[if mso]>
            <style>
                // TODO: fix me!
                * {
                    font-family: sans-serif !important;
                }
            </style>
          <![endif]-->
      
          
          <!-- NOTE: the title is processed in the backend during the campaign dispatch -->
          <title></title>
  
          <!--[if gte mso 9]>
          <xml>
              <o:OfficeDocumentSettings>
                  <o:AllowPNG/>
                  <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
          </xml>
          <![endif]-->
          
      <style>
          :root {
              color-scheme: light;
              supported-color-schemes: light;
          }
  
          html,
          body {
              margin: 0 auto !important;
              padding: 0 !important;
              height: 100% !important;
              width: 100% !important;
  
              overflow-wrap: break-word;
              -ms-word-break: break-all;
              -ms-word-break: break-word;
              word-break: break-all;
              word-break: break-word;
          }
  
  
          
    direction: undefined;
    center,
    #body_table {
      
    }
  
    ul, ol {
      padding: 0;
      margin-top: 0;
      margin-bottom: 0;
    }
  
    li {
      margin-bottom: 0;
    }
  
    
  
    .list-block-list-outside-left li {
      margin-left: 20px !important;
    }
  
    .list-block-list-outside-right li {
      margin-right: 20px !important;
    }
  
    
      .paragraph {
        font-size: 15px;
        font-family: Open Sans, sans-serif;
        font-weight: normal;
        font-style: normal;
        text-align: start;
        line-height: 1;
        text-decoration: none;
        color: #5f5f5f;
        
      }
    
  
      .heading1 {
        font-size: 32px;
        font-family: Open Sans, sans-serif;
        font-weight: normal;
        font-style: normal;
        text-align: start;
        line-height: 1;
        text-decoration: none;
        color: #000000;
        
      }
    
  
      .heading2 {
        font-size: 26px;
        font-family: Open Sans, sans-serif;
        font-weight: normal;
        font-style: normal;
        text-align: start;
        line-height: 1;
        text-decoration: none;
        color: #000000;
        
      }
    
  
      .heading3 {
        font-size: 19px;
        font-family: Open Sans, sans-serif;
        font-weight: normal;
        font-style: normal;
        text-align: start;
        line-height: 1;
        text-decoration: none;
        color: #000000;
        
      }
    
  
      .list {
        font-size: 15px;
        font-family: Open Sans, sans-serif;
        font-weight: normal;
        font-style: normal;
        text-align: start;
        line-height: 1;
        text-decoration: none;
        color: #5f5f5f;
        
      }
    
  
    p a, 
    li a {
      
    display: inline-block;  
      color: #5457FF;
      text-decoration: none;
      font-style: normal;
      font-weight: normal;
  
    }
  
    .button-table a {
      text-decoration: none;
      font-style: normal;
      font-weight: normal;
    }
  
    .paragraph > span {text-decoration: none;}.heading1 > span {text-decoration: none;}.heading2 > span {text-decoration: none;}.heading3 > span {text-decoration: none;}.list > span {text-decoration: none;}
  
  
          * {
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
          }
  
          div[style*="margin: 16px 0"] {
              margin: 0 !important;
          }
  
          #MessageViewBody,
          #MessageWebViewDiv {
              width: 100% !important;
          }
  
          table {
              border-collapse: collapse;
              border-spacing: 0;
              mso-table-lspace: 0pt !important;
              mso-table-rspace: 0pt !important;
          }
          table:not(.button-table) {
              border-spacing: 0 !important;
              border-collapse: collapse !important;
              table-layout: fixed !important;
              margin: 0 auto !important;
          }
  
          th {
              font-weight: normal;
          }
  
          tr td p {
              margin: 0;
          }
  
          img {
              -ms-interpolation-mode: bicubic;
          }
  
          a[x-apple-data-detectors],
  
          .unstyle-auto-detected-links a,
          .aBn {
              border-bottom: 0 !important;
              cursor: default !important;
              color: inherit !important;
              text-decoration: none !important;
              font-size: inherit !important;
              font-family: inherit !important;
              font-weight: inherit !important;
              line-height: inherit !important;
          }
  
          .im {
              color: inherit !important;
          }
  
          .a6S {
              display: none !important;
              opacity: 0.01 !important;
          }
  
          img.g-img+div {
              display: none !important;
          }
  
          @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
              u~div .contentMainTable {
                  min-width: 320px !important;
              }
          }
  
          @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
              u~div .contentMainTable {
                  min-width: 375px !important;
              }
          }
  
          @media only screen and (min-device-width: 414px) {
              u~div .contentMainTable {
                  min-width: 414px !important;
              }
          }
      </style>
  
      <style>
          @media only screen and (max-device-width: 640px) {
              .contentMainTable {
                  width: 100% !important;
                  margin: auto !important;
              }
              .single-column {
                  width: 100% !important;
                  margin: auto !important;
              }
              .multi-column {
                  width: 100% !important;
                  margin: auto !important;
              }
              .imageBlockWrapper {
                  width: 100% !important;
                  margin: auto !important;
              }
          }
          @media only screen and (max-width: 640px) {
              .contentMainTable {
                  width: 100% !important;
                  margin: auto !important;
              }
              .single-column {
                  width: 100% !important;
                  margin: auto !important;
              }
              .multi-column {
                  width: 100% !important;
                  margin: auto !important;
              }
              .imageBlockWrapper {
                  width: 100% !important;
                  margin: auto !important;
              }
          }
      </style>
      
      
  <!--[if mso | IE]>
      <style>
          .list-block-outlook-outside-left {
              margin-left: -18px;
          }
      
          .list-block-outlook-outside-right {
              margin-right: -18px;
          }
  
          a:link, span.MsoHyperlink {
              mso-style-priority:99;
              
    display: inline-block;  
      color: #5457FF;
      text-decoration: none;
      font-style: normal;
      font-weight: normal;
  
          }
      </style>
  <![endif]-->
  
  
      </head>
  
      <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #F5F6F8;">
          <center role="article" aria-roledescription="email" lang="en" style="width: 100%; background-color: #F5F6F8;">
              <!--[if mso | IE]>
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" id="body_table" style="background-color: #F5F6F8;">
              <tbody>    
                  <tr>
                      <td>
                      <![endif]-->
                          <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="640" style="margin: auto;" class="contentMainTable">
                          
                       <tr class="wp-block-editor-imageblock-v1">
                          <td style="background-color:#F5F6F8;padding-top:32px;padding-bottom:32px;padding-left:32px;padding-right:32px" align="center">
                             <table align="center" width="374.4" class="imageBlockWrapper" style="width:374.4px" role="presentation">
                                <tbody>
                                   <tr>
                                   <td style="padding:0;display: flex;justify-content: center;align-items: center;"><div style="
                                   font-size: 2rem;
                                   text-align: center;
                               ">Supreme Transfer Ltd.</div></td>
                                   </tr>
                                </tbody>
                             </table>
                          </td>
                       </tr>
                       <tr class="wp-block-editor-headingblock-v1">
                          <td valign="top" style="background-color:#ffffff;display:block;padding-top:64px;padding-right:32px;padding-bottom:32px;padding-left:32px;text-align:center">
                             <p style="font-family:Open Sans, sans-serif;text-align:center;line-height:1.1;font-size:32px;background-color:#ffffff;color:#000000;margin:0;word-break:normal" class="heading1">Thank you for booking with www.supremetransfer.co.uk</p>
                             <p style="text-align: center">Booking Reference No. `+formData.get('id')+`</p>
                          </td>
                       </tr>
                       <tr class="wp-block-editor-headingblock-v1">
                          <td valign="top" style="background-color:#F9FAFB;display:block;padding-top:42px;padding-right:32px;padding-bottom:16px;padding-left:32px;text-align:center">
                             <p style="font-family:Open Sans, sans-serif;text-align:center;line-height:1.1;font-size:30px;background-color:#F9FAFB;color:#000000;margin:0;word-break:normal" class="heading3">Your booking has been confirmed with us</p>
                          </td>
                       </tr>
                       <tr>
                          <td style="padding-top:20px;padding-left:0;padding-right:0;padding-bottom:20px;background-color:#ffffff">
                             <table role="presentation" class="multi-column" style="width:640px;border-collapse:collapse !important" cellpadding="0" cellspacing="0">
                                <tbody>
                                   <tr style="padding-top:20px;padding-left:0;padding-right:0;padding-bottom:20px" class="wp-block-editor-twocolumnsfiftyfiftyblock-v1">
                                      <td style="width:320px;float:left" class="wp-block-editor-column single-column">
                                         <table role="presentation" align="left" border="0" class="single-column" width="320" style="width:320px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0">
                                            <tbody>
                                               <tr class="wp-block-editor-paragraphblock-v1">
                                                  <td valign="top" style="padding:20px 20px 20px 20px;background-color:#ffffff">
                                                     <p class="paragraph" style="font-family:Open Sans, sans-serif;line-height:22.50px;font-size:15px;margin:0;color:#5f5f5f;letter-spacing:0;word-break:normal">`
                                                     var clientName = formData.get('clientName')
                                                     clientName && (message += `<span style="font-weight: bold" class="bold">Name: </span>`+clientName.trim()+`<br>`)
                                                     var clientEmail = formData.get('clientEmail')
                                                     clientEmail && (message += `<span style="font-weight: bold" class="bold">Email: </span>`+clientEmail.trim()+`<br>`)
                                                     var clientPhone = formData.get('clientPhone')
                                                     clientPhone && (message += `<span style="font-weight: bold" class="bold">Phone: </span>`+clientPhone.trim()+`<br>`)
                                                     var direction = formData.get('direction')
                                                     direction && (message += `<span style="font-weight: bold" class="bold">Ride: </span>`+direction.trim()+`<br>`)
                                                     var vehicle = formData.get('vehicle')
                                                     vehicle && (message += `<span style="font-weight: bold" class="bold">Vehicle: </span>`+vehicle.trim()+`<br>`)
                                                  message += `</td>
                                               </tr>
                                            </tbody>
                                         </table>
                                      </td>
                                      <td style="width:320px;float:left" class="wp-block-editor-column single-column">
                                         <table role="presentation" align="right" border="0" class="single-column" width="320" style="width:320px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0">
                                            <tbody>
                                               <tr class="wp-block-editor-paragraphblock-v1">
                                                  <td valign="top" style="padding:20px 20px 20px 20px;background-color:#ffffff">
                                                     <p class="paragraph" style="font-family:Open Sans, sans-serif;line-height:22.50px;font-size:15px;margin:0;color:#5f5f5f;letter-spacing:0;word-break:normal">`
                                                     var passenger = formData.get('passenger')
                                                     passenger && (message += `<span style="font-weight: bold" class="bold">Passengers: </span>`+passenger.trim()+`<br>`)
                                                     var luggage = formData.get('luggage')
                                                     luggage && (message += `<span style="font-weight: bold" class="bold">Luggage: </span>`+luggage.trim()+`<br>`)
                                                     /*var infantSeat = formData.get('infantSeatPrice')
                                                     { message += `<span style="font-weight: bold" class="bold">Infant Seats: </span>`+infantSeat.trim()+`<br>`}
                                                     var babySeat = formData.get('babySeatPrice')
                                                     { message += `<span style="font-weight: bold" class="bold">Baby Seats: </span>`+babySeat.trim()+`<br>`}
                                                     var boosterSeat = formData.get('boosterSeatPrice')
                                                     { message += `<span style="font-weight: bold" class="bold">Booster Seats: </span>`+boosterSeat.trim()+`<br>`}
                                                     */var note = formData.get('note')
                                                     note && (message += `<span style="font-weight: bold" class="bold">Note: </span>`+note.trim()+`<br>`)
                                                  message += `</td>
                                               </tr>
                                            </tbody>
                                         </table>
                                      </td>
                                   </tr>
                                </tbody>
                             </table>
                          </td>
                       </tr>
                       <tr class="wp-block-editor-dividerblock-v1" align="center" valign="top">
                          <td style="padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;background-color:#ffffff">
                             <div style="background:#718096;font-size:1px;line-height:1px;border:0">&nbsp;</div>
                          </td>
                       </tr>
                       <tr>
                          <td style="padding-top:20px;padding-left:0;padding-right:0;padding-bottom:20px;background-color:#ffffff">
                             <table role="presentation" class="multi-column" style="width:640px;border-collapse:collapse !important" cellpadding="0" cellspacing="0">
                                <tbody>
                                   <tr style="padding-top:20px;padding-left:0;padding-right:0;padding-bottom:20px" class="wp-block-editor-twocolumnsfiftyfiftyblock-v1">
                                      <td style="width:320px;float:left" class="wp-block-editor-column single-column">
                                         <table role="presentation" align="left" border="0" class="single-column" width="320" style="width:320px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0">
                                            <tbody>
                                               <tr class="wp-block-editor-paragraphblock-v1">
                                                  <td valign="top" style="padding:20px 20px 20px 20px;background-color:#ffffff">

                                                     <p class="paragraph" style="font-family:Open Sans, sans-serif;line-height:22.50px;font-size:15px;margin:0;color:#5f5f5f;letter-spacing:0;word-break:normal">`
                                                     var pickupAddress = formData.get('pickupAddress')
                                                     pickupAddress && (message += `<span style="font-weight: bold" class="bold">Pickup: </span>`+pickupAddress.trim()+`<br>`)
                                                     var pickupTime = formData.get('pickupTime')
                                                     pickupTime && (message += `<span style="font-weight: bold" class="bold">Pickup Time: </span>`+pickupTime.trim()+`<br>`)
                                                     var via1Address = formData.get('via1Address')
                                                     via1Address && (message += `<span style="font-weight: bold" class="bold">Via: </span>`+via1Address.trim()+`<br>`)
                                                     var via2Address = formData.get('via2Address')
                                                     via2Address && (message += `<span style="font-weight: bold" class="bold">Via: </span>`+via2Address.trim()+`<br>`)
                                                     var airline = formData.get('airline')
                                                     airline && (message += `<span style="font-weight: bold" class="bold">Airline: </span>`+airline.trim()+`<br>`)
                                                     var arrivalFlightNumber = formData.get('arrivalFlightNumber')
                                                     arrivalFlightNumber && (message += `<span style="font-weight: bold" class="bold">Flight Number: </span>`+arrivalFlightNumber.trim()+`<br>`)
                                                     var flightArrivalTime = formData.get('flightArrivalTime')
                                                     flightArrivalTime && (message += `<span style="font-weight: bold" class="bold">Flight Time: </span>`+flightArrivalTime.trim()+`<br>`)
                                                     var terminal = formData.get('terminal')
                                                     terminal && (message += `<span style="font-weight: bold" class="bold">Terminal: </span>`+terminal.trim()+`<br>`)
                                                  message += `</td>
                                               </tr>
                                            </tbody>
                                         </table>
                                      </td>
                                      <td style="width:320px;float:left" class="wp-block-editor-column single-column">
                                         <table role="presentation" align="right" border="0" class="single-column" width="320" style="width:320px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0">
                                            <tbody>
                                               <tr class="wp-block-editor-paragraphblock-v1">
                                                  <td valign="top" style="padding:20px 20px 20px 20px;background-color:#ffffff">
                                                     <p class="paragraph" style="font-family:Open Sans, sans-serif;line-height:22.50px;font-size:15px;margin:0;color:#5f5f5f;letter-spacing:0;word-break:normal">`
                                                     var dropoffAddress = formData.get('dropoffAddress')
                                                     dropoffAddress && (message += `<span style="font-weight: bold" class="bold">Drop off: </span>`+dropoffAddress.trim()+`<br>`)
                                                     var returnTime = formData.get('returnTime')
                                                     returnTime && (message += `<span style="font-weight: bold" class="bold">Return Time: </span>`+returnTime.trim()+`<br>`)
                                                  message += `</td>
                                               </tr>
                                            </tbody>
                                         </table>
                                      </td>
                                   </tr>
                                </tbody>
                             </table>
                          </td>
                       </tr>
                       <tr class="wp-block-editor-dividerblock-v1" align="center" valign="top">
                          <td style="padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;background-color:#ffffff">
                             <div style="background:#718096;font-size:1px;line-height:1px;border:0">&nbsp;</div>
                          </td>
                       </tr>
                       <tr>
                          <td style="padding-top:20px;padding-left:0;padding-right:0;padding-bottom:20px;background-color:#ffffff">
                             <table role="presentation" class="multi-column" style="width:640px;border-collapse:collapse !important" cellpadding="0" cellspacing="0">
                                <tbody>
                                   <tr style="padding-top:20px;padding-left:0;padding-right:0;padding-bottom:20px" class="wp-block-editor-twocolumnsfiftyfiftyblock-v1">
                                      <td style="width:320px;float:left" class="wp-block-editor-column single-column">
                                         <table role="presentation" align="left" border="0" class="single-column" width="320" style="width:320px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0">
                                            <tbody>
                                               <tr class="wp-block-editor-paragraphblock-v1">
                                                  <td valign="top" style="padding:20px 20px 20px 20px;background-color:#ffffff">
                                                     <p class="paragraph" style="font-family:Open Sans, sans-serif;line-height:22.50px;font-size:15px;margin:0;color:#5f5f5f;letter-spacing:0;word-break:normal">`
                                                     var paymentMethod = formData.get('paymentMethod')
                                                     paymentMethod && (message += `<span style="font-weight: bold" class="bold">Payment Method: </span>`+paymentMethod.trim()+`<br>`)
                                                  message += `</td>
                                               </tr>
                                            </tbody>
                                         </table>
                                      </td>
                                      <td style="width:320px;float:left" class="wp-block-editor-column single-column">
                                         <table role="presentation" align="right" border="0" class="single-column" width="320" style="width:320px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0">
                                            <tbody>
                                               <tr class="wp-block-editor-paragraphblock-v1">
                                                  <td valign="top" style="padding:20px 20px 20px 20px;background-color:#ffffff">
                                                     <p class="paragraph" style="font-family:Open Sans, sans-serif;line-height:22.50px;font-size:15px;margin:0;color:#5f5f5f;varter-spacing:0;word-break:normal">`
                                                     let totalPrice = formData.get('totalPrice')
                                                     totalPrice && (message += `<span style="font-weight: bold" class="bold">Price: </span>`+totalPrice.trim()+`<br>`)
                                                  message += `</td>
                                               </tr>
                                            </tbody>
                                         </table>
                                      </td>
                                   </tr>
                                </tbody>
                             </table>
                          </td>
                       </tr>
                       <tr class="wp-block-editor-headingblock-v1">
                          <td valign="top" style="background-color:#ffffff;display:block;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;text-align:center">
                             <p style="font-family:Open Sans, sans-serif;text-align:center;line-height:NaNpx;letter-spacing:0;font-size:32px;background-color:#ffffff;color:#000000;margin:0;word-break:normal" class="heading1">Thank You</p>
                          </td>
                       </tr>
                       <tr class="wp-block-editor-headingblock-v1">
                          <td valign="top" style="background-color:#F9FAFB;display:block;padding-top:42px;padding-right:32px;padding-bottom:16px;padding-left:32px;text-align:center">
                             <p style="font-family:Open Sans, sans-serif;text-align:center;line-height:21.85px;letter-spacing:0;font-size:19px;background-color:#F9FAFB;color:#000000;margin:0;word-break:normal" class="heading3">Orders are subject to our current terms &amp; conditions. We welcome all comments on the services that we provide. <br></p>
                          </td>
                       </tr>
                          </table>
                      <!--[if mso | IE]>
                      </td>
                  </tr>
              </tbody>
              </table>
              <![endif]-->
          </center>
      </body>
  </html>`
  
  const emailsApi = new EmailsApi(config);

  const email = decodeURI(clientEmail.trim())
  
  const emailMessageData = {
      Recipients: [
        { 
          Email: email
        },
        { 
          Email: 'info@supremetransfer.co.uk'
        }
      ],
      Content: {
        Body: [
          {
            ContentType: "HTML",
            Charset: "utf-8",
            Content: message
          },
        ],
        From: "info@supremetransfer.co.uk",
        Subject: "Booking Confirmation id "+formData.get('id')
      }
    };
  
  const sendBulkEmails = (emailMessageData) => {
    emailsApi.emailsPost(emailMessageData).then((response) => {
        console.log('API called successfully.');
        console.log(response.data);
    }).catch((error) => {
        console.error(error);
    });
  };
  
  sendBulkEmails(emailMessageData)
}
export const sendVerificationEmail = async (formData) => {
  const config = new Configuration({
      apiKey: '1D309F32AF9DE6046D488EA86F2D703B6DC68846318D7ED99001E7D168893B16426033BA8FAB5FEE2BEBCA78FEF3D0DA'
  });

  var message = `<!DOCTYPE html>
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="x-apple-disable-message-reformatting">
          <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no">
  
          <meta name="color-scheme" content="light">
          <meta name="supported-color-schemes" content="light">
  
          
          <!--[if !mso]><!-->
            
            <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap">
  
            <style type="text/css">
            // TODO: fix me!
              @import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap);
          </style>
          
          <!--<![endif]-->
  
          <!--[if mso]>
            <style>
                // TODO: fix me!
                * {
                    font-family: sans-serif !important;
                }
            </style>
          <![endif]-->
      
          
          <!-- NOTE: the title is processed in the backend during the campaign dispatch -->
          <title></title>
  
          <!--[if gte mso 9]>
          <xml>
              <o:OfficeDocumentSettings>
                  <o:AllowPNG/>
                  <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
          </xml>
          <![endif]-->
          
      <style>
          :root {
              color-scheme: light;
              supported-color-schemes: light;
          }
  
          html,
          body {
              margin: 0 auto !important;
              padding: 0 !important;
              height: 100% !important;
              width: 100% !important;
  
              overflow-wrap: break-word;
              -ms-word-break: break-all;
              -ms-word-break: break-word;
              word-break: break-all;
              word-break: break-word;
          }
  
  
          
    direction: undefined;
    center,
    #body_table {
      
    }
  
    ul, ol {
      padding: 0;
      margin-top: 0;
      margin-bottom: 0;
    }
  
    li {
      margin-bottom: 0;
    }
  
    
  
    .list-block-list-outside-left li {
      margin-left: 20px !important;
    }
  
    .list-block-list-outside-right li {
      margin-right: 20px !important;
    }
  
    
      .paragraph {
        font-size: 15px;
        font-family: Open Sans, sans-serif;
        font-weight: normal;
        font-style: normal;
        text-align: start;
        line-height: 1;
        text-decoration: none;
        color: #5f5f5f;
        
      }
    
  
      .heading1 {
        font-size: 32px;
        font-family: Open Sans, sans-serif;
        font-weight: normal;
        font-style: normal;
        text-align: start;
        line-height: 1;
        text-decoration: none;
        color: #000000;
        
      }
    
  
      .heading2 {
        font-size: 26px;
        font-family: Open Sans, sans-serif;
        font-weight: normal;
        font-style: normal;
        text-align: start;
        line-height: 1;
        text-decoration: none;
        color: #000000;
        
      }
    
  
      .heading3 {
        font-size: 19px;
        font-family: Open Sans, sans-serif;
        font-weight: normal;
        font-style: normal;
        text-align: start;
        line-height: 1;
        text-decoration: none;
        color: #000000;
        
      }
    
  
      .list {
        font-size: 15px;
        font-family: Open Sans, sans-serif;
        font-weight: normal;
        font-style: normal;
        text-align: start;
        line-height: 1;
        text-decoration: none;
        color: #5f5f5f;
        
      }
    
  
    p a, 
    li a {
      
    display: inline-block;  
      color: #5457FF;
      text-decoration: none;
      font-style: normal;
      font-weight: normal;
  
    }
  
    .button-table a {
      text-decoration: none;
      font-style: normal;
      font-weight: normal;
    }
  
    .paragraph > span {text-decoration: none;}.heading1 > span {text-decoration: none;}.heading2 > span {text-decoration: none;}.heading3 > span {text-decoration: none;}.list > span {text-decoration: none;}
  
  
          * {
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
          }
  
          div[style*="margin: 16px 0"] {
              margin: 0 !important;
          }
  
          #MessageViewBody,
          #MessageWebViewDiv {
              width: 100% !important;
          }
  
          table {
              border-collapse: collapse;
              border-spacing: 0;
              mso-table-lspace: 0pt !important;
              mso-table-rspace: 0pt !important;
          }
          table:not(.button-table) {
              border-spacing: 0 !important;
              border-collapse: collapse !important;
              table-layout: fixed !important;
              margin: 0 auto !important;
          }
  
          th {
              font-weight: normal;
          }
  
          tr td p {
              margin: 0;
          }
  
          img {
              -ms-interpolation-mode: bicubic;
          }
  
          a[x-apple-data-detectors],
  
          .unstyle-auto-detected-links a,
          .aBn {
              border-bottom: 0 !important;
              cursor: default !important;
              color: inherit !important;
              text-decoration: none !important;
              font-size: inherit !important;
              font-family: inherit !important;
              font-weight: inherit !important;
              line-height: inherit !important;
          }
  
          .im {
              color: inherit !important;
          }
  
          .a6S {
              display: none !important;
              opacity: 0.01 !important;
          }
  
          img.g-img+div {
              display: none !important;
          }
  
          @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
              u~div .contentMainTable {
                  min-width: 320px !important;
              }
          }
  
          @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
              u~div .contentMainTable {
                  min-width: 375px !important;
              }
          }
  
          @media only screen and (min-device-width: 414px) {
              u~div .contentMainTable {
                  min-width: 414px !important;
              }
          }
      </style>
  
      <style>
          @media only screen and (max-device-width: 640px) {
              .contentMainTable {
                  width: 100% !important;
                  margin: auto !important;
              }
              .single-column {
                  width: 100% !important;
                  margin: auto !important;
              }
              .multi-column {
                  width: 100% !important;
                  margin: auto !important;
              }
              .imageBlockWrapper {
                  width: 100% !important;
                  margin: auto !important;
              }
          }
          @media only screen and (max-width: 640px) {
              .contentMainTable {
                  width: 100% !important;
                  margin: auto !important;
              }
              .single-column {
                  width: 100% !important;
                  margin: auto !important;
              }
              .multi-column {
                  width: 100% !important;
                  margin: auto !important;
              }
              .imageBlockWrapper {
                  width: 100% !important;
                  margin: auto !important;
              }
          }
      </style>
      
      
  <!--[if mso | IE]>
      <style>
          .list-block-outlook-outside-left {
              margin-left: -18px;
          }
      
          .list-block-outlook-outside-right {
              margin-right: -18px;
          }
  
          a:link, span.MsoHyperlink {
              mso-style-priority:99;
              
    display: inline-block;  
      color: #5457FF;
      text-decoration: none;
      font-style: normal;
      font-weight: normal;
  
          }
      </style>
  <![endif]-->
  
  
      </head>
  
      <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #F5F6F8;">
          <center role="article" aria-roledescription="email" lang="en" style="width: 100%; background-color: #F5F6F8;">
              <!--[if mso | IE]>
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" id="body_table" style="background-color: #F5F6F8;">
              <tbody>    
                  <tr>
                      <td>
                      <![endif]-->
                          <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="640" style="margin: auto;" class="contentMainTable">
                          
                       <tr class="wp-block-editor-imageblock-v1">
                          <td style="background-color:#F5F6F8;padding-top:32px;padding-bottom:32px;padding-left:32px;padding-right:32px" align="center">
                             <table align="center" width="374.4" class="imageBlockWrapper" style="width:374.4px" role="presentation">
                                <tbody>
                                   <tr>
                                   <td style="padding:0;display: flex;justify-content: center;align-items: center;"><div style="
                                   font-size: 2rem;
                                   text-align: center;
                               ">Supreme Transfer Ltd.</div></td>
                                   </tr>
                                </tbody>
                             </table>
                          </td>
                       </tr>
                       <tr class="wp-block-editor-headingblock-v1">
                          <td valign="top" style="background-color:#ffffff;display:block;padding-top:64px;padding-right:32px;padding-bottom:32px;padding-left:32px;text-align:center">
                             <p style="font-family:Open Sans, sans-serif;text-align:center;line-height:36.80px;font-size:32px;background-color:#ffffff;color:#000000;margin:0;word-break:normal" class="heading1">Thank you for booking with www.supremetransfer.co.uk</p>
                             <p style="text-align: center">Booking Reference No. `+formData.get('_id')+`</p>
                          </td>
                       </tr>
                       <tr class="wp-block-editor-headingblock-v1">
                          <td valign="top" style="background-color:#F9FAFB;display:block;padding-top:42px;padding-right:32px;padding-bottom:16px;padding-left:32px;text-align:center">
                             <p style="font-family:Open Sans, sans-serif;text-align:center;line-height:21.85px;font-size:19px;background-color:#F9FAFB;color:#000000;margin:0;word-break:normal" class="heading3">We have received your booking and our customer service team will confirm your booking via email within 12 hours from the time of booking.</p>
                          </td>
                       </tr>
                       <tr>
                          <td style="padding-top:20px;padding-left:0;padding-right:0;padding-bottom:20px;background-color:#ffffff">
                             <table role="presentation" class="multi-column" style="width:640px;border-collapse:collapse !important" cellpadding="0" cellspacing="0">
                                <tbody>
                                   <tr style="padding-top:20px;padding-left:0;padding-right:0;padding-bottom:20px" class="wp-block-editor-twocolumnsfiftyfiftyblock-v1">
                                      <td style="width:320px;float:left" class="wp-block-editor-column single-column">
                                         <table role="presentation" align="left" border="0" class="single-column" width="320" style="width:320px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0">
                                            <tbody>
                                               <tr class="wp-block-editor-paragraphblock-v1">
                                                  <td valign="top" style="padding:20px 20px 20px 20px;background-color:#ffffff">
                                                     <p class="paragraph" style="font-family:Open Sans, sans-serif;line-height:22.50px;font-size:15px;margin:0;color:#5f5f5f;letter-spacing:0;word-break:normal">`
                                                     var clientName = formData.get('clientName')
                                                     clientName && (message += `<span style="font-weight: bold" class="bold">Name: </span>`+clientName.trim()+`<br>`)
                                                     var clientEmail = formData.get('clientEmail')
                                                     clientEmail && (message += `<span style="font-weight: bold" class="bold">Email: </span>`+clientEmail.trim()+`<br>`)
                                                     var clientPhone = formData.get('clientPhone')
                                                     clientPhone && (message += `<span style="font-weight: bold" class="bold">Phone: </span>`+clientPhone.trim()+`<br>`)
                                                     var direction = formData.get('direction')
                                                     direction && (message += `<span style="font-weight: bold" class="bold">Ride: </span>`+direction.trim()+`<br>`)
                                                     var vehicle = formData.get('vehicle')
                                                     vehicle && (message += `<span style="font-weight: bold" class="bold">Vehicle: </span>`+vehicle.trim()+`<br>`)
                                                  message += `</td>
                                               </tr>
                                            </tbody>
                                         </table>
                                      </td>
                                      <td style="width:320px;float:left" class="wp-block-editor-column single-column">
                                         <table role="presentation" align="right" border="0" class="single-column" width="320" style="width:320px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0">
                                            <tbody>
                                               <tr class="wp-block-editor-paragraphblock-v1">
                                                  <td valign="top" style="padding:20px 20px 20px 20px;background-color:#ffffff">
                                                     <p class="paragraph" style="font-family:Open Sans, sans-serif;line-height:22.50px;font-size:15px;margin:0;color:#5f5f5f;letter-spacing:0;word-break:normal">`
                                                     var passenger = formData.get('passenger')
                                                     passenger && (message += `<span style="font-weight: bold" class="bold">Passengers: </span>`+passenger.trim()+`<br>`)
                                                     var luggage = formData.get('luggage')
                                                     luggage && (message += `<span style="font-weight: bold" class="bold">Luggage: </span>`+luggage.trim()+`<br>`)
                                                     /*var infantSeat = formData.get('infantSeatPrice')
                                                     { message += `<span style="font-weight: bold" class="bold">Infant Seats: </span>`+infantSeat.trim()+`<br>`}
                                                     var babySeat = formData.get('babySeatPrice')
                                                     { message += `<span style="font-weight: bold" class="bold">Baby Seats: </span>`+babySeat.trim()+`<br>`}
                                                     var boosterSeat = formData.get('boosterSeatPrice')
                                                     { message += `<span style="font-weight: bold" class="bold">Booster Seats: </span>`+boosterSeat.trim()+`<br>`}
                                                     */var note = formData.get('note')
                                                     note && (message += `<span style="font-weight: bold" class="bold">Note: </span>`+note.trim()+`<br>`)
                                                  message += `</td>
                                               </tr>
                                            </tbody>
                                         </table>
                                      </td>
                                   </tr>
                                </tbody>
                             </table>
                          </td>
                       </tr>
                       <tr class="wp-block-editor-dividerblock-v1" align="center" valign="top">
                          <td style="padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;background-color:#ffffff">
                             <div style="background:#718096;font-size:1px;line-height:1px;border:0">&nbsp;</div>
                          </td>
                       </tr>
                       <tr>
                          <td style="padding-top:20px;padding-left:0;padding-right:0;padding-bottom:20px;background-color:#ffffff">
                             <table role="presentation" class="multi-column" style="width:640px;border-collapse:collapse !important" cellpadding="0" cellspacing="0">
                                <tbody>
                                   <tr style="padding-top:20px;padding-left:0;padding-right:0;padding-bottom:20px" class="wp-block-editor-twocolumnsfiftyfiftyblock-v1">
                                      <td style="width:320px;float:left" class="wp-block-editor-column single-column">
                                         <table role="presentation" align="left" border="0" class="single-column" width="320" style="width:320px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0">
                                            <tbody>
                                               <tr class="wp-block-editor-paragraphblock-v1">
                                                  <td valign="top" style="padding:20px 20px 20px 20px;background-color:#ffffff">

                                                     <p class="paragraph" style="font-family:Open Sans, sans-serif;line-height:22.50px;font-size:15px;margin:0;color:#5f5f5f;letter-spacing:0;word-break:normal">`
                                                     var pickupAddress = formData.get('pickupAddress')
                                                     pickupAddress && (message += `<span style="font-weight: bold" class="bold">Pickup: </span>`+pickupAddress.trim()+`<br>`)
                                                     var pickupTime = formData.get('pickupTime')
                                                     pickupTime && (message += `<span style="font-weight: bold" class="bold">Pickup Time: </span>`+pickupTime.trim()+`<br>`)
                                                     var via1Address = formData.get('via1Address')
                                                     via1Address && (message += `<span style="font-weight: bold" class="bold">Via: </span>`+via1Address.trim()+`<br>`)
                                                     var via2Address = formData.get('via2Address')
                                                     via2Address && (message += `<span style="font-weight: bold" class="bold">Via: </span>`+via2Address.trim()+`<br>`)
                                                     var airline = formData.get('airline')
                                                     airline && (message += `<span style="font-weight: bold" class="bold">Airline: </span>`+airline.trim()+`<br>`)
                                                     var arrivalFlightNumber = formData.get('arrivalFlightNumber')
                                                     arrivalFlightNumber && (message += `<span style="font-weight: bold" class="bold">Flight Number: </span>`+arrivalFlightNumber.trim()+`<br>`)
                                                     var flightArrivalTime = formData.get('flightArrivalTime')
                                                     flightArrivalTime && (message += `<span style="font-weight: bold" class="bold">Flight Time: </span>`+flightArrivalTime.trim()+`<br>`)
                                                     var terminal = formData.get('terminal')
                                                     terminal && (message += `<span style="font-weight: bold" class="bold">Terminal: </span>`+terminal.trim()+`<br>`)
                                                  message += `</td>
                                               </tr>
                                            </tbody>
                                         </table>
                                      </td>
                                      <td style="width:320px;float:left" class="wp-block-editor-column single-column">
                                         <table role="presentation" align="right" border="0" class="single-column" width="320" style="width:320px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0">
                                            <tbody>
                                               <tr class="wp-block-editor-paragraphblock-v1">
                                                  <td valign="top" style="padding:20px 20px 20px 20px;background-color:#ffffff">
                                                     <p class="paragraph" style="font-family:Open Sans, sans-serif;line-height:22.50px;font-size:15px;margin:0;color:#5f5f5f;letter-spacing:0;word-break:normal">`
                                                     var dropoffAddress = formData.get('dropoffAddress')
                                                     dropoffAddress && (message += `<span style="font-weight: bold" class="bold">Drop off: </span>`+dropoffAddress.trim()+`<br>`)
                                                     var returnTime = formData.get('returnTime')
                                                     returnTime && (message += `<span style="font-weight: bold" class="bold">Return Time: </span>`+returnTime.trim()+`<br>`)
                                                  message += `</td>
                                               </tr>
                                            </tbody>
                                         </table>
                                      </td>
                                   </tr>
                                </tbody>
                             </table>
                          </td>
                       </tr>
                       <tr class="wp-block-editor-dividerblock-v1" align="center" valign="top">
                          <td style="padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;background-color:#ffffff">
                             <div style="background:#718096;font-size:1px;line-height:1px;border:0">&nbsp;</div>
                          </td>
                       </tr>
                       <tr>
                          <td style="padding-top:20px;padding-left:0;padding-right:0;padding-bottom:20px;background-color:#ffffff">
                             <table role="presentation" class="multi-column" style="width:640px;border-collapse:collapse !important" cellpadding="0" cellspacing="0">
                                <tbody>
                                   <tr style="padding-top:20px;padding-left:0;padding-right:0;padding-bottom:20px" class="wp-block-editor-twocolumnsfiftyfiftyblock-v1">
                                      <td style="width:320px;float:left" class="wp-block-editor-column single-column">
                                         <table role="presentation" align="left" border="0" class="single-column" width="320" style="width:320px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0">
                                            <tbody>
                                               <tr class="wp-block-editor-paragraphblock-v1">
                                                  <td valign="top" style="padding:20px 20px 20px 20px;background-color:#ffffff">
                                                     <p class="paragraph" style="font-family:Open Sans, sans-serif;line-height:22.50px;font-size:15px;margin:0;color:#5f5f5f;letter-spacing:0;word-break:normal">`
                                                     var paymentMethod = formData.get('paymentMethod')
                                                     paymentMethod && (message += `<span style="font-weight: bold" class="bold">Payment Method: </span>`+paymentMethod.trim()+`<br>`)
                                                  message += `</td>
                                               </tr>
                                            </tbody>
                                         </table>
                                      </td>
                                      <td style="width:320px;float:left" class="wp-block-editor-column single-column">
                                         <table role="presentation" align="right" border="0" class="single-column" width="320" style="width:320px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0">
                                            <tbody>
                                               <tr class="wp-block-editor-paragraphblock-v1">
                                                  <td valign="top" style="padding:20px 20px 20px 20px;background-color:#ffffff">
                                                     <p class="paragraph" style="font-family:Open Sans, sans-serif;line-height:22.50px;font-size:15px;margin:0;color:#5f5f5f;varter-spacing:0;word-break:normal">`
                                                     let totalPrice = formData.get('totalPrice')
                                                     totalPrice && (message += `<span style="font-weight: bold" class="bold">Price: </span>`+totalPrice.trim()+`<br>`)
                                                  message += `</td>
                                               </tr>
                                            </tbody>
                                         </table>
                                      </td>
                                   </tr>
                                </tbody>
                             </table>
                          </td>
                       </tr>
                       <tr class="wp-block-editor-headingblock-v1">
                          <td valign="top" style="background-color:#ffffff;display:block;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;text-align:center">
                             <p style="font-family:Open Sans, sans-serif;text-align:center;line-height:NaNpx;letter-spacing:0;font-size:32px;background-color:#ffffff;color:#000000;margin:0;word-break:normal" class="heading1">Thank You</p>
                          </td>
                       </tr>
                       <tr class="wp-block-editor-headingblock-v1">
                          <td valign="top" style="background-color:#F9FAFB;display:block;padding-top:42px;padding-right:32px;padding-bottom:16px;padding-left:32px;text-align:center">
                             <p style="font-family:Open Sans, sans-serif;text-align:center;line-height:21.85px;letter-spacing:0;font-size:19px;background-color:#F9FAFB;color:#000000;margin:0;word-break:normal" class="heading3">Orders are subject to our current terms &amp; conditions. We welcome all comments on the services that we provide. <br></p>
                          </td>
                       </tr>
                          </table>
                      <!--[if mso | IE]>
                      </td>
                  </tr>
              </tbody>
              </table>
              <![endif]-->
          </center>
      </body>
  </html>`
  
  const emailsApi = new EmailsApi(config);

  const email = decodeURI(clientEmail.trim())
  
  const emailMessageData = {
      Recipients: [
        { 
          Email: email
        },
        { 
          Email: 'info@supremetransfer.co.uk'
        }
      ],
      Content: {
        Body: [
          {
            ContentType: "HTML",
            Charset: "utf-8",
            Content: message
          },
        ],
        From: "info@supremetransfer.co.uk",
        Subject: "Your booking has been received - "+formData.get('_id')
      }
    };
  
  const sendBulkEmails = (emailMessageData) => {
    emailsApi.emailsPost(emailMessageData).then((response) => {
        console.log('API called successfully.');
        console.log(response.data);
    }).catch((error) => {
        console.error(error);
    });
  };
  
  sendBulkEmails(emailMessageData)
}
export const confirmationHandler = async (searchParams) => {
  const id = searchParams._id.trim()

  connectToDB();
  const ride = await Rides.findById(id)

  if(!ride){
      let formData = new FormData()

      id && formData.set('_id',id)

      let pickupAddress = searchParams.pickupAddress
      pickupAddress && formData.set('pickupAddress', pickupAddress.trim())
      let via1Address = searchParams.via1Address
      via1Address && formData.set('via1Address', via1Address.trim())
      let via2Address = searchParams.via2Address
      via2Address && formData.set('via2Address', via2Address.trim())
      let dropoffAddress = searchParams.dropoffAddress
      dropoffAddress && formData.set('dropoffAddress', dropoffAddress.trim())
      let direction = searchParams.direction
      direction && formData.set('direction', direction.trim())
      let pickupTime = searchParams.pickupTime
      pickupTime && formData.set('pickupTime', pickupTime.trim())
      let returnTime = searchParams.returnTime
      returnTime && formData.set('returnTime', returnTime.trim())
      let passengers = searchParams.passengers
      passengers && formData.set('passengers', passengers.trim())
      let luggage = searchParams.luggage
      luggage && formData.set('luggage', luggage.trim())
      let infantSeat = searchParams.infantSeat
      infantSeat && formData.set('infantSeat', infantSeat.trim())
      let babySeat = searchParams.babySeat
      babySeat && formData.set('babySeat', babySeat.trim())
      let boosterSeat = searchParams.boosterSeat
      boosterSeat && formData.set('boosterSeat', boosterSeat.trim())
      let price = searchParams.price
      price && formData.set('price', price.trim())
      let vehicle = searchParams.vehicle
      vehicle && formData.set('vehicle', vehicle.trim())
      let clientName = searchParams.clientName
      clientName && formData.set('clientName', clientName.trim())
      let clientPhone = searchParams.clientPhone
      clientPhone && formData.set('clientPhone', clientPhone.trim())
      let clientEmail = searchParams.clientEmail
      clientEmail && formData.set('clientEmail', clientEmail.trim())
      let note = searchParams.note
      note && formData.set('note', note.trim())
      let airline = searchParams.airline
      airline && formData.set('airline', airline.trim())
      let arrivalFlightNumber = searchParams.arrivalFlightNumber
      arrivalFlightNumber && formData.set('arrivalFlightNumber', arrivalFlightNumber.trim())
      let flightArrivalTime = searchParams.flightArrivalTime
      flightArrivalTime && formData.set('flightArrivalTime', flightArrivalTime.trim())
      let terminal = searchParams.terminal
      terminal && formData.set('terminal', terminal.trim())
      let paymentMethod = searchParams.paymentMethod
      paymentMethod && formData.set('paymentMethod', paymentMethod.trim())
      let totalPrice = searchParams.totalPrice
      totalPrice && formData.set('totalPrice', totalPrice.trim())
      let status = searchParams.status
      status && formData.set('status', status.trim())

      await addRidesWithId(formData)
  
      await sendVerificationEmail(formData)
  }else{
      console.log("Ride already exists: ", ride)
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
  console.log('1')
  const schema = z.object({
    pickupAddress: z.string().min(1, {message: "Select pick up address"}),
    dropoffAddress: z.string().min(1, {message: "Select drop off address"}),
    pickupTime: z.string().min(1, {message: "Select pick up time"}),
  });
  console.log('2')
  try {
    const parsedData = schema.parse({
      pickupAddress: formData.get("pickupAddress"),
      dropoffAddress: formData.get("dropoffAddress"),
      pickupTime: formData.get("pickupTime"),
    });
    console.log('3')

    var price = 0

    if(!(formData.get('via1Address') || formData.get('via2Address'))){
      console.log('4')
      if(formData.get('pickupZipcode') && formData.get('dropoffZipcode')){
        console.log('5')
        const p = formData.get('pickupZipcode').split(" ")
        const d = formData.get('dropoffZipcode').split(" ")
        connectToDB();
        console.log("p: ",p)
        console.log("d: ",d)
        const postCodeToPostCode = await PostCodeToPostCode.find({pickup: p[0].trim(), dropoff: d[0].trim()})
        console.log('6')
        if(postCodeToPostCode.length){
          console.log('7')
          price = postCodeToPostCode[0].price
        }else{
          console.log('8')
          const dis = await distance(formData.get('pickupLat'),formData.get('pickupLng'),formData.get('dropoffLat'),formData.get('dropoffLng'))
          if(dis){
            console.log('9')
            const miles = dis.data[0].distanceMeters*0.000621371192;
            connectToDB();
            const chargesPerMile = await ChargesPerMile.find({min: {$lte: miles}, max: {$gte: miles}})
            console.log('10')
            if(chargesPerMile.length){
              console.log('11')
              price = toTwoDigits(chargesPerMile[0].price * miles, 2)
            }
          }
        }
        console.log('12')
      }else{
        console.log('13')
        const dis = await distance(formData.get('pickupLat'),formData.get('pickupLng'),formData.get('dropoffLat'),formData.get('dropoffLng'))
        if(dis){
          console.log('14')
          const miles = dis.data[0].distanceMeters*0.000621371192;
          connectToDB();
          const chargesPerMile = await ChargesPerMile.find({min: {$lte: miles}, max: {$gte: miles}})
          console.log('15')
          if(chargesPerMile.length){
            console.log('16')
            price = toTwoDigits(chargesPerMile[0].price * miles, 2)
          }
        }
      }
    }else{
      console.log('17')
      if(formData.get('via1Address') && formData.get('via2Address')){
        console.log('18')
        var dis = await distance(formData.get('pickupLat'),formData.get('pickupLng'),formData.get('via1Lat'),formData.get('via1Lng'))
        var miles = dis.data[0].distanceMeters*0.000621371192;
        
        console.log('pickupLat: ',formData.get('pickupLat'))
        console.log('pickupLng: ',formData.get('pickupLng'))
        console.log('via1Lat: ',formData.get('via1Lat'))
        console.log('via1Lng: ',formData.get('via1Lng'))
        console.log('dis: ',dis.data)
        console.log('miles: ',miles)
        console.log('---------------------')
        dis = await distance(formData.get('via1Lat'),formData.get('via1Lng'),formData.get('via2Lat'),formData.get('via2Lng'))
        miles += dis.data[0].distanceMeters*0.000621371192;

        console.log('via1Lat: ',formData.get('via1Lat'))
        console.log('via1Lng: ',formData.get('via1Lng'))
        console.log('via2Lat: ',formData.get('via2Lat'))
        console.log('via2Lng: ',formData.get('via2Lng'))
        console.log('dis: ',dis.data)
        console.log('miles: ',miles)
        console.log('---------------------')
        dis = await distance(formData.get('via2Lat'),formData.get('via2Lng'),formData.get('dropoffLat'),formData.get('dropoffLng'))
        miles += dis.data[0].distanceMeters*0.000621371192;
        
        console.log('via2Lat: ',formData.get('via2Lat'))
        console.log('via2Lng: ',formData.get('via2Lng'))
        console.log('dropoffLat: ',formData.get('dropoffLat'))
        console.log('dropoffLng: ',formData.get('dropoffLng'))
        console.log('dis: ',dis.data)
        console.log('miles: ',miles)

        connectToDB();
        const chargesPerMile = await ChargesPerMile.find({min: {$lte: miles}, max: {$gte: miles}})
        console.log('19')
        if(chargesPerMile.length){
          console.log('20')
          price = toTwoDigits(chargesPerMile[0].price * miles, 2)
        }
      }else{
        console.log('21')
        if(formData.get('via1Address')){
          console.log('22')
          var dis = await distance(formData.get('pickupLat'),formData.get('pickupLng'),formData.get('via1Lat'),formData.get('via1Lng'))
          var miles = dis.data[0].distanceMeters*0.000621371192;
          dis = await distance(formData.get('via1Lat'),formData.get('via1Lng'),formData.get('dropoffLat'),formData.get('dropoffLng'))
          miles += dis.data[0].distanceMeters*0.000621371192;
          
          connectToDB();
          const chargesPerMile = await ChargesPerMile.find({min: {$lte: miles}, max: {$gte: miles}})

          if(chargesPerMile.length){
            console.log('23')
            price = toTwoDigits(chargesPerMile[0].price * miles, 2)
          }
        }else{
          console.log('24')
          var dis = await distance(formData.get('pickupLat'),formData.get('pickupLng'),formData.get('via2Lat'),formData.get('via2Lng'))
          var miles = dis.data[0].distanceMeters*0.000621371192;
          dis = await distance(formData.get('via2Lat'),formData.get('via2Lng'),formData.get('dropoffLat'),formData.get('dropoffLng'))
          miles += dis.data[0].distanceMeters*0.000621371192;
          
          connectToDB();
          const chargesPerMile = await ChargesPerMile.find({min: {$lte: miles}, max: {$gte: miles}})

          if(chargesPerMile.length){
            console.log('25')
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

  
  
  const pz = formData.get('pickupZipcode')
  const v1z = formData.get('pickupZipcode')
  const v2z = formData.get('dropoffZipcode')
  const dz = formData.get('dropoffZipcode')
  var zoneCharges
  var aryz = new Array()
  if(pz){
    aryz.push({'zone': pz.split(" ")[0]})
  }
  if(v1z){
    aryz.push({'zone': v1z.split(" ")[0]})
  }
  if(v2z){
    aryz.push({'zone': v2z.split(" ")[0]})
  }
  if(dz){
    aryz.push({'zone': dz.split(" ")[0]})
  }

  console.log(formData)
  if(aryz.length){
    connectToDB()
    zoneCharges = await ZoneCharges.find({ $or: aryz }).count()
    if(zoneCharges){
      const zoneCharges = await ExtraPrices.find({title: "Zone Charges"})
      if(zoneCharges.length){
        formData.set('zoneCharges',zoneCharges[0].price)
      }
    }
  }
  if(pz){
    connectToDB()
    let parkingCharges = await ParkingCharges.find({ pickup: pz.split(" ")[0] })
    console.log("pparkingCharges",parkingCharges)
    if(parkingCharges.length){
      formData.set('pickupParkingCharges',parkingCharges[0].price)
    }
  }
  if(pz){
    connectToDB()
    let parkingCharges = await ParkingCharges.find({ dropoff: dz.split(" ")[0] })
    console.log("dparkingCharges",parkingCharges)
    if(parkingCharges.length){
      formData.set('dropoffParkingCharges',parkingCharges[0].price)
    }
  }
  if(formData.get('infantSeat')){
    let extraPrices = await ExtraPrices.find({ title: "Infant Seat" })
    if(extraPrices.length){
      formData.set('infantSeatPrice',extraPrices[0].price)
    }
  }
  if(formData.get('babySeat')){
    let extraPrices = await ExtraPrices.find({ title: "Baby Seat" })
    if(extraPrices.length){
      formData.set('babySeatPrice',extraPrices[0].price)
    }
  }
  if(formData.get('boosterSeat')){
    let extraPrices = await ExtraPrices.find({ title: "Booster Seat" })
    if(extraPrices.length){
      formData.set('boosterSeatPrice',extraPrices[0].price)
    }
  }

  console.log(formData)
  if(price){
    var query = `/fleet/${price}?`
    for(var pair of formData.entries()){
      query += `${pair[0]}= ${pair[1]}&`
    }
    redirect(query)
  }
  revalidatePath("/");
}

