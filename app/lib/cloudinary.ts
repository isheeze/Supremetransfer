'use server'
import {v2 as cloudinary} from 'cloudinary';
import { z } from 'zod';
import { addDrivers, deleteDrivers, updateDrivers } from './actions'
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
          
cloudinary.config({ 
  cloud_name: 'dhf5kkewe', 
  api_key: '443743544276155', 
  api_secret: 'YrczPCw3SfGGzWgvGai8UjxgUxQ' 
});

export async function deleteCloudinaryDriver(formData: FormData) {
  try {
    if(formData.get('picture_publickey')){
      try { cloudinary.uploader.destroy(formData.get('picture_publickey') as string, function(result) { console.log('result: ',result) }) }catch(error){ console.log("cloudinary remove error ->",error) }
    }
    if(formData.get('DVLALicense_publickey')){
      try { cloudinary.uploader.destroy(formData.get('DVLALicense_publickey') as string, function(result) { console.log('result: ',result) }) }catch(error){ console.log("cloudinary remove error ->",error) }
    }
    if(formData.get('DriverPCO_publickey')){
      try { cloudinary.uploader.destroy(formData.get('DriverPCO_publickey') as string, function(result) { console.log('result: ',result) }) }catch(error){ console.log("cloudinary remove error ->",error) }
    }
    if(formData.get('DriversNationalInsurance_publickey')){
      try { cloudinary.uploader.destroy(formData.get('DriversNationalInsurance_publickey') as string, function(result) { console.log('result: ',result) }) }catch(error){ console.log("cloudinary remove error ->",error) }
    }
    if(formData.get('VehicleLogBook_publickey')){
      try { cloudinary.uploader.destroy(formData.get('VehicleLogBook_publickey') as string, function(result) { console.log('result: ',result) }) }catch(error){ console.log("cloudinary remove error ->",error) }
    }
    if(formData.get('MOT_publickey')){
      try { cloudinary.uploader.destroy(formData.get('MOT_publickey') as string, function(result) { console.log('result: ',result) }) }catch(error){ console.log("cloudinary remove error ->",error) }
    }
    if(formData.get('InsuranceCertificate_publickey')){
      try { cloudinary.uploader.destroy(formData.get('InsuranceCertificate_publickey') as string, function(result) { console.log('result: ',result) }) }catch(error){ console.log("cloudinary remove error ->",error) }
    }
    if(formData.get('VehiclePCO_publickey')){
      try { cloudinary.uploader.destroy(formData.get('VehiclePCO_publickey') as string, function(result) { console.log('result: ',result) }) }catch(error){ console.log("cloudinary remove error ->",error) }
    }
    if(formData.get('VehicleRentalAgreement_publickey')){
      try { cloudinary.uploader.destroy(formData.get('VehicleRentalAgreement_publickey') as string, function(result) { console.log('result: ',result) }) }catch(error){ console.log("cloudinary remove error ->",error) }
    }
    deleteDrivers(formData)
  } catch (error:any) {
    console.log('errors: ', error)
    return { errors: error.errors };
  }
  revalidatePath("/dashboard/drivers");
  redirect("/dashboard/drivers");
}
export async function updateCloudinaryDriver(prevState: any, formData: FormData) {
  try {
    if((formData.get('picture') as File).size){
      if(formData.get('picture_publickey')){
        try { cloudinary.uploader.destroy(formData.get('picture_publickey') as string, function(result) { console.log('result: ',result) }) }catch(error){ console.log("cloudinary remove error ->",error) }
      }
      const file = formData.get('picture') as File;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
        }, function (error:any, result:any) {
          if (error) {
            console.log("cloudinary add error ->",error)
            reject(error);
            return;
          }
          formData.delete('picture')
          formData.set('picture', result.url)
          formData.set('picture_publickey', result.public_id)
          resolve(result)
        })
        .end(buffer);
      });
    }else{
      formData.set('picture', "")
      formData.set('picture_publickey', "")
    }
    if((formData.get('DVLALicense') as File).size){
      if(formData.get('DVLALicense_publickey')){
        cloudinary.uploader.destroy(formData.get('DVLALicense_publickey') as string, function(result) { console.log('result: ',result) })
      }
      const file = formData.get('DVLALicense') as File;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
        }, function (error:any, result:any) {
          if (error) {
            reject(error);
            return;
          }
          formData.delete('DVLALicense')
          formData.set('DVLALicense', result.url)
          formData.set('DVLALicense_publickey', result.public_id)
          resolve(result)
        })
        .end(buffer);
      });
    }else{
      formData.set('DVLALicense', "")
      formData.set('DVLALicense_publickey', "")
    }
    if((formData.get('DriverPCO') as File).size){
      if(formData.get('DriverPCO_publickey')){
        cloudinary.uploader.destroy(formData.get('DriverPCO_publickey') as string, function(result) { console.log('result: ',result) })
      }
      const file = formData.get('DriverPCO') as File;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
        }, function (error:any, result:any) {
          if (error) {
            reject(error);
            return;
          }
          formData.delete('DriverPCO')
          formData.set('DriverPCO', result.url)
          formData.set('DriverPCO_publickey', result.public_id)
          resolve(result)
        })
        .end(buffer);
      });
    }else{
      formData.set('DriverPCO', "")
      formData.set('DriverPCO_publickey', "")
    }
    if((formData.get('DriversNationalInsurance') as File).size){
      if(formData.get('DriversNationalInsurance_publickey')){
        cloudinary.uploader.destroy(formData.get('DriversNationalInsurance_publickey') as string, function(result) { console.log('result: ',result) })
      }
      const file = formData.get('DriversNationalInsurance') as File;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
        }, function (error:any, result:any) {
          if (error) {
            reject(error);
            return;
          }
          formData.delete('DriversNationalInsurance')
          formData.set('DriversNationalInsurance', result.url)
          formData.set('DriversNationalInsurance_publickey', result.public_id)
          resolve(result)
        })
        .end(buffer);
      });
    }else{
      formData.set('DriversNationalInsurance', "")
      formData.set('DriversNationalInsurance_publickey', "")
    }
    if((formData.get('VehicleLogBook') as File).size){
      if(formData.get('VehicleLogBook_publickey')){
        cloudinary.uploader.destroy(formData.get('VehicleLogBook_publickey') as string, function(result) { console.log('result: ',result) })
      }
      const file = formData.get('VehicleLogBook') as File;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
        }, function (error:any, result:any) {
          if (error) {
            reject(error);
            return;
          }
          formData.delete('VehicleLogBook')
          formData.set('VehicleLogBook', result.url)
          formData.set('VehicleLogBook_publickey', result.public_id)
          resolve(result)
        })
        .end(buffer);
      });
    }else{
      formData.set('VehicleLogBook', "")
      formData.set('VehicleLogBook_publickey', "")
    }
    if((formData.get('MOT') as File).size){
      if(formData.get('MOT_publickey')){
        cloudinary.uploader.destroy(formData.get('MOT_publickey') as string, function(result) { console.log('result: ',result) })
      }
      const file = formData.get('MOT') as File;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
        }, function (error:any, result:any) {
          if (error) {
            reject(error);
            return;
          }
          formData.delete('MOT')
          formData.set('MOT', result.url)
          formData.set('MOT_publickey', result.public_id)
          resolve(result)
        })
        .end(buffer);
      });
    }else{
      formData.set('MOT', "")
      formData.set('MOT_publickey', "")
    }
    if((formData.get('InsuranceCertificate') as File).size){
      if(formData.get('InsuranceCertificate_publickey')){
        cloudinary.uploader.destroy(formData.get('InsuranceCertificate_publickey') as string, function(result) { console.log('result: ',result) })
      }
      const file = formData.get('InsuranceCertificate') as File;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
        }, function (error:any, result:any) {
          if (error) {
            reject(error);
            return;
          }
          formData.delete('InsuranceCertificate')
          formData.set('InsuranceCertificate', result.url)
          formData.set('InsuranceCertificate_publickey', result.public_id)
          resolve(result)
        })
        .end(buffer);
      });
    }else{
      formData.set('InsuranceCertificate', "")
      formData.set('InsuranceCertificate_publickey', "")
    }
    if((formData.get('VehiclePCO') as File).size){
      if(formData.get('VehiclePCO_publickey')){
        cloudinary.uploader.destroy(formData.get('VehiclePCO_publickey') as string, function(result) { console.log('result: ',result) })
      }
      const file = formData.get('VehiclePCO') as File;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
        }, function (error:any, result:any) {
          if (error) {
            reject(error);
            return;
          }
          formData.delete('VehiclePCO')
          formData.set('VehiclePCO', result.url)
          formData.set('VehiclePCO_publickey', result.public_id)
          resolve(result)
        })
        .end(buffer);
      });
    }else{
      formData.set('VehiclePCO', "")
      formData.set('VehiclePCO_publickey', "")
    }
    if((formData.get('VehicleRentalAgreement') as File).size){
      if(formData.get('VehicleRentalAgreement_publickey')){
        cloudinary.uploader.destroy(formData.get('VehicleRentalAgreement_publickey') as string, function(result) { console.log('result: ',result) })
      }
      const file = formData.get('VehicleRentalAgreement') as File;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
        }, function (error:any, result:any) {
          if (error) {
            reject(error);
            return;
          }
          formData.delete('VehicleRentalAgreement')
          formData.set('VehicleRentalAgreement', result.url)
          formData.set('VehicleRentalAgreement_publickey', result.public_id)
          resolve(result)
        })
        .end(buffer);
      });
    }else{
      formData.set('VehicleRentalAgreement', "")
      formData.set('VehicleRentalAgreement_publickey', "")
    }
    updateDrivers(formData)
  } catch (error:any) {
    console.log('errors: ', error)
    return { errors: error.errors };
  }
  revalidatePath("/dashboard/drivers");
  redirect("/dashboard/drivers");
}
export async function handleDriver(prevState: any, formData: FormData) {
  const schema = z.object({
    fullName: z.string().min(1),
    mobile: z.string().min(1),
    email: z.string().min(1).email(),
  });
  
  try {
    const parsedData = schema.parse({
      fullName: formData.get("fullName"),
      mobile: formData.get("mobile"),
      email: formData.get("email"),
    });

    if((formData.get('picture') as File).size){
      const file = formData.get('picture') as File;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
        }, function (error:any, result:any) {
          if (error) {
            reject(error);
            return;
          }
          formData.delete('picture')
          formData.set('picture', result.url)
          formData.set('picture_publickey', result.public_id)
          resolve(result)
        })
        .end(buffer);
      });
    }else{
      formData.set('picture', "")
      formData.set('picture_publickey', "")
    }
    if((formData.get('DVLALicense') as File).size){
      const file = formData.get('DVLALicense') as File;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
        }, function (error:any, result:any) {
          if (error) {
            reject(error);
            return;
          }
          formData.delete('DVLALicense')
          formData.set('DVLALicense', result.url)
          formData.set('DVLALicense_publickey', result.public_id)
          resolve(result)
        })
        .end(buffer);
      });
    }else{
      formData.set('DVLALicense', "")
      formData.set('DVLALicense_publickey', "")
    }
    if((formData.get('DriverPCO') as File).size){
      const file = formData.get('DriverPCO') as File;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
        }, function (error:any, result:any) {
          if (error) {
            reject(error);
            return;
          }
          formData.delete('DriverPCO')
          formData.set('DriverPCO', result.url)
          formData.set('DriverPCO_publickey', result.public_id)
          resolve(result)
        })
        .end(buffer);
      });
    }else{
      formData.set('DriverPCO', "")
      formData.set('DriverPCO_publickey', "")
    }
    if((formData.get('DriversNationalInsurance') as File).size){
      const file = formData.get('DriversNationalInsurance') as File;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
        }, function (error:any, result:any) {
          if (error) {
            reject(error);
            return;
          }
          formData.delete('DriversNationalInsurance')
          formData.set('DriversNationalInsurance', result.url)
          formData.set('DriversNationalInsurance_publickey', result.public_id)
          resolve(result)
        })
        .end(buffer);
      });
    }else{
      formData.set('DriversNationalInsurance', "")
      formData.set('DriversNationalInsurance_publickey', "")
    }
    if((formData.get('VehicleLogBook') as File).size){
      const file = formData.get('VehicleLogBook') as File;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
        }, function (error:any, result:any) {
          if (error) {
            reject(error);
            return;
          }
          formData.delete('VehicleLogBook')
          formData.set('VehicleLogBook', result.url)
          formData.set('VehicleLogBook_publickey', result.public_id)
          resolve(result)
        })
        .end(buffer);
      });
    }else{
      formData.set('VehicleLogBook', "")
      formData.set('VehicleLogBook_publickey', "")
    }
    if((formData.get('MOT') as File).size){
      const file = formData.get('MOT') as File;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
        }, function (error:any, result:any) {
          if (error) {
            reject(error);
            return;
          }
          formData.delete('MOT')
          formData.set('MOT', result.url)
          formData.set('MOT_publickey', result.public_id)
          resolve(result)
        })
        .end(buffer);
      });
    }else{
      formData.set('MOT', "")
      formData.set('MOT_publickey', "")
    }
    if((formData.get('InsuranceCertificate') as File).size){
      const file = formData.get('InsuranceCertificate') as File;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
        }, function (error:any, result:any) {
          if (error) {
            reject(error);
            return;
          }
          formData.delete('InsuranceCertificate')
          formData.set('InsuranceCertificate', result.url)
          formData.set('InsuranceCertificate_publickey', result.public_id)
          resolve(result)
        })
        .end(buffer);
      });
    }else{
      formData.set('InsuranceCertificate', "")
      formData.set('InsuranceCertificate_publickey', "")
    }
    if((formData.get('VehiclePCO') as File).size){
      const file = formData.get('VehiclePCO') as File;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
        }, function (error:any, result:any) {
          if (error) {
            reject(error);
            return;
          }
          formData.delete('VehiclePCO')
          formData.set('VehiclePCO', result.url)
          formData.set('VehiclePCO_publickey', result.public_id)
          resolve(result)
        })
        .end(buffer);
      });
    }else{
      formData.set('VehiclePCO', "")
      formData.set('VehiclePCO_publickey', "")
    }
    if((formData.get('VehicleRentalAgreement') as File).size){
      const file = formData.get('VehicleRentalAgreement') as File;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
        }, function (error:any, result:any) {
          if (error) {
            reject(error);
            return;
          }
          formData.delete('VehicleRentalAgreement')
          formData.set('VehicleRentalAgreement', result.url)
          formData.set('VehicleRentalAgreement_publickey', result.public_id)
          resolve(result)
        })
        .end(buffer);
      });
    }else{
      formData.set('VehicleRentalAgreement', "")
      formData.set('VehicleRentalAgreement_publickey', "")
    }
    addDrivers(formData)
  } catch (error:any) {
    console.log('errors: ', error.errors)
    return { errors: error.errors };
  }
  revalidatePath("/dashboard/drivers");
  redirect("/dashboard/drivers");
}