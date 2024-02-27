'use client'
import { useFormState } from "react-dom";
import { useState } from 'react'
import { handleDriver } from "@app/lib/cloudinary";

export default function AddDriverForm({driver} : any) {
    const [state, formAction] = useFormState(handleDriver, null)
    const [picture, setPicture] = useState<String>()
    const [DVLALicense, setDVLALicense] = useState<String>()
    const [DriverPCO, setDriverPCO] = useState<String>()
    const [DriversNationalInsurance, setDriversNationalInsurance] = useState<String>()
    const [VehicleLogBook, setVehicleLogBook] = useState<String>()
    const [MOT, setMOT] = useState<String>()
    const [InsuranceCertificate, setInsuranceCertificate] = useState<String>()
    const [VehiclePCO, setVehiclePCO] = useState<String>()
    const [VehicleRentalAgreement, setVehicleRentalAgreement] = useState<String>()

    return (
        <form action={formAction} method="POST" >
            <label>Full Name</label>
            <input type="text" name="fullName" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Mobile Number</label>
            <input type="text" name="mobile" />

            <div className="sm:col-span-2">
                <label className="mt-2.5 block leading-6 text-white">
                Picture
                </label>
                <div className="mt-2.5 flex items-center justify-center w-full">
                <label htmlFor="picture" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                        {!picture && <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG (MAX. 800x400px)</p>}
                        {picture && <p className="text-xs text-gray-900 font-bold">{picture}</p>}
                    </div>
                    <input name="picture" id="picture" type="file" className="hidden" onChange={(e)=>{ if (e.target.files && e.target.files[0]) {setPicture(e.target.files[0].name)} }} />
                </label>
                </div>
            </div>
            <div>
                <label className="mt-2.5 block leading-6 text-white">
                DVLA License (Front & Back)
                </label>
                <div className="mt-2.5 flex items-center justify-center w-full">
                <label htmlFor="DVLALicense" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        {<p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>}
                        {DVLALicense && <p className="text-xs text-gray-900 font-bold">{DVLALicense}</p>}
                    </div>
                    <input name="DVLALicense" id="DVLALicense" type="file" className="hidden" onChange={(e)=>{ if (e.target.files && e.target.files[0]) {setDVLALicense(e.target.files[0].name)} }} />
                </label>
                </div>
            </div>
            <div>
                <label className="mt-2.5 block leading-6 text-white">
                Driver PCO (Paper & Badge)
                </label>
                <div className="mt-2.5 flex items-center justify-center w-full">
                <label htmlFor="DriverPCO" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        {<p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>}
                        {DriverPCO && <p className="text-xs text-gray-900 font-bold">{DriverPCO}</p>}
                    </div>
                    <input name="DriverPCO" id="DriverPCO" type="file" className="hidden" onChange={(e)=>{ if (e.target.files && e.target.files[0]) {setDriverPCO(e.target.files[0].name)} }} />
                </label>
                </div>
            </div>
            <div>
                <label className="mt-2.5 block leading-6 text-white">
                Drivers National Insurance Number
                </label>
                <div className="mt-2.5 flex items-center justify-center w-full">
                <label htmlFor="DriversNationalInsurance" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        {<p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>}
                        {DriversNationalInsurance && <p className="text-xs text-gray-900 font-bold">{DriversNationalInsurance}</p>}
                    </div>
                    <input name="DriversNationalInsurance" id="DriversNationalInsurance" type="file" className="hidden" onChange={(e)=>{ if (e.target.files && e.target.files[0]) {setDriversNationalInsurance(e.target.files[0].name)} }} />
                </label>
                </div>
            </div>
            <div>
                <label className="mt-2.5 block leading-6 text-white">
                Vehicle Log Book 2nd Page V5
                </label>
                <div className="mt-2.5 flex items-center justify-center w-full">
                <label htmlFor="VehicleLogBook" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        {<p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>}
                        {VehicleLogBook && <p className="text-xs text-gray-900 font-bold">{VehicleLogBook}</p>}
                    </div>
                    <input name="VehicleLogBook" id="VehicleLogBook" type="file" className="hidden" onChange={(e)=>{ if (e.target.files && e.target.files[0]) {setVehicleLogBook(e.target.files[0].name)} }} />
                </label>
                </div>
            </div>
            <div>
                <label className="mt-2.5 block leading-6 text-white">
                MOT
                </label>
                <div className="mt-2.5 flex items-center justify-center w-full">
                <label htmlFor="MOT" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        {<p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>}
                        {MOT && <p className="text-xs text-gray-900 font-bold">{MOT}</p>}
                    </div>
                    <input name="MOT" id="MOT" type="file" className="hidden" onChange={(e)=>{ if (e.target.files && e.target.files[0]) {setMOT(e.target.files[0].name)} }} />
                </label>
                </div>
            </div>
            <div>
                <label className="mt-2.5 block leading-6 text-white">
                Insurance Certificate (If fleet insurance attach detail paper)
                </label>
                <div className="mt-2.5 flex items-center justify-center w-full">
                <label htmlFor="InsuranceCertificate" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        {<p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>}
                        {InsuranceCertificate && <p className="text-xs text-gray-900 font-bold">{InsuranceCertificate}</p>}
                    </div>
                    <input name="InsuranceCertificate" id="InsuranceCertificate" type="file" className="hidden" onChange={(e)=>{ if (e.target.files && e.target.files[0]) {setInsuranceCertificate(e.target.files[0].name)} }} />
                </label>
                </div>
            </div>
            <div>
                <label className="mt-2.5 block leading-6 text-white">
                Vehicle PCO
                </label>
                <div className="mt-2.5 flex items-center justify-center w-full">
                <label htmlFor="VehiclePCO" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        {<p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>}
                        {VehiclePCO && <p className="text-xs text-gray-900 font-bold">{VehiclePCO}</p>}
                    </div>
                    <input name="VehiclePCO" id="VehiclePCO" type="file" className="hidden" onChange={(e)=>{ if (e.target.files && e.target.files[0]) {setVehiclePCO(e.target.files[0].name)} }} />
                </label>
                </div>
            </div>
            <div>
                <label className="mt-2.5 block leading-6 text-white">
                Vehicle Rental Agreement (if rental Vehicle)
                </label>
                <div className="mt-2.5 flex items-center justify-center w-full">
                <label htmlFor="VehicleRentalAgreement" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        {<p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>}
                        {VehicleRentalAgreement && <p className="text-xs text-gray-900 font-bold">{VehicleRentalAgreement}</p>}
                    </div>
                    <input name="VehicleRentalAgreement" id="VehicleRentalAgreement" type="file" className="hidden" onChange={(e)=>{ if (e.target.files && e.target.files[0]) {setVehicleRentalAgreement(e.target.files[0].name)} }} />
                </label>
                </div>
            </div>
          <button>Add</button>
        </form>
    )
}