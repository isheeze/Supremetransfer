"use client";
import { useFormState } from "react-dom";
import { handleDriver } from "@app/lib/cloudinary";
import { useState } from "react";

export default function Driver(props: any) {
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
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Drive with Us!</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
        Start your journey as a valued driver with {props.websiteName}!
        </p>
      </div>
      <form action={formAction} method="POST" className="mx-auto mt-16 max-w-2xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold leading-6 text-gray-900">
              Full name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="fullName"
                id="fullName"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 customFocusRing" style={{ "--theme-color": props.themeColor } as React.CSSProperties}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-semibold leading-6 text-gray-900">
              Mobile Number
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="mobile"
                id="mobile"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 customFocusRing" style={{ "--theme-color": props.themeColor } as React.CSSProperties}
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 customFocusRing" style={{ "--theme-color": props.themeColor } as React.CSSProperties}
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
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
            <label className="block text-sm font-semibold leading-6 text-gray-900">
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
            <label className="block text-sm font-semibold leading-6 text-gray-900">
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
            <label className="block text-sm font-semibold leading-6 text-gray-900">
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
            <label className="block text-sm font-semibold leading-6 text-gray-900">
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
            <label className="block text-sm font-semibold leading-6 text-gray-900">
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
            <label className="block text-sm font-semibold leading-6 text-gray-900">
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
            <label className="block text-sm font-semibold leading-6 text-gray-900">
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
            <label className="block text-sm font-semibold leading-6 text-gray-900">
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
          
          <div className='sm:col-span-2 text-sm'>
            For questions or quick inquiries, reach out on <strong>WhatsApp:</strong>{' '}
            <a href={`https://wa.me/${props.whatsapp}`} className="font-semibold" style={{ color: props.themeColor }}>
            {props.whatsapp}
            </a>{' '}
            or <strong>Email:</strong>{' '}
            <a href={`mailto:${props.email}`} className="font-semibold" style={{ color: props.themeColor }}>
            {props.email}
            </a>.
          </div>
        </div>
        {state && <div className="my-8">{state.errors.map((item: any) => (<div className="mb-2 rounded-md shadow-md bg-red-800 text-gray-50 p-2">{item.message}</div>))}</div>}
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 customFocusOutline" style={{ "--theme-color": props.themeColor, backgroundColor: props.themeColor } as React.CSSProperties}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}
