'use client'
import { useSearchParams } from "next/navigation"
function toTwoDigits( value:any, dp:any ){
    return +parseFloat(value).toFixed( dp );
}
export default async function OrderAndFlightDetails(props: any) {
    const searchParams = useSearchParams();
    
    const zoneCharges = searchParams.get("zoneCharges")
    const price = searchParams.get("price")

    var totalPrice = parseFloat(price)
    if(searchParams.get("zoneCharges")){
        totalPrice += parseFloat(searchParams.get("zoneCharges"))
    }
    if(searchParams.get("pickupParkingCharges")){
        totalPrice += parseFloat(searchParams.get("pickupParkingCharges"))
    }
    if(searchParams.get("dropoffParkingCharges")){
        totalPrice += parseFloat(searchParams.get("dropoffParkingCharges"))
    }
    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex-1 shadow-lg ring-1 ring-gray-300 rounded-xl mx-3 my-6 p-6">
                <div className="mx-auto max-w-xl">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                            <label htmlFor="full-name" className="block text-sm font-semibold leading-6 text-gray-900">
                            Full Name*
                            </label>
                            <div className="mt-2.5">
                            <input
                                type="text"
                                name="clientName"
                                id="clientName"
                                autoComplete="given-name"
                                required
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 customFocusRing" style={{ "--theme-color": props.themeColor } as React.CSSProperties}
                            />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                            Email*
                            </label>
                            <div className="mt-2.5">
                            <input
                                type="email"
                                name="clientEmail"
                                id="clientEmail"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 customFocusRing" style={{ "--theme-color": props.themeColor } as React.CSSProperties}
                            />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                            Phone number*
                            </label>
                            <div className="relative mt-2.5">
                            <input
                                type="tel"
                                name="clientPhone"
                                id="clientPhone"
                                autoComplete="tel"
                                required
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 customFocusRing" style={{ "--theme-color": props.themeColor } as React.CSSProperties}
                            />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                            Note / Address Details ( Optional )
                            </label>
                            <div className="mt-2.5">
                            <textarea
                                name="note"
                                id="note"
                                rows={4}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 customFocusRing" style={{ "--theme-color": props.themeColor } as React.CSSProperties}
                                defaultValue={''}
                                />
                            </div>
                        </div>
                        <div className="col-span-full">
                            <fieldset>
                                <div className="mt-2 grid grid-cols-1 sm:grid-cols-6 gap-x-6 gap-y-2">
                                    <div className="flex items-center gap-x-3 sm:col-span-2">
                                    <div className="flex h-6 items-center">
                                        <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="Card">
                                        <input type="radio"
                                            id="Card"
                                            name="paymentMethod"
                                            value="Debit/Credit Card"
                                            defaultChecked
                                            className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-slate-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:border-4 checked:before:bg-gray-900 hover:before:opacity-10"
                                        />
                                        <span
                                            className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                            stroke="currentColor" strokeWidth="1">
                                            <circle cx="10" cy="10" r="7"  fill="transparent" stroke="transparent"/>
                                            </svg>
                                        </span>
                                        </label>
                                    </div>
                                    <label htmlFor="Card" className="block text-sm font-medium leading-6 text-black">
                                    Debit/Credit Card
                                    </label>
                                    </div>
                                    <div className="flex items-center gap-x-3 sm:col-span-2">
                                    
                                    <div className="flex h-6 items-center">
                                        <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="Cash">
                                        <input type="radio"
                                            id="Cash"
                                            name="paymentMethod"
                                            value="Cash Payment"
                                            className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-slate-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:border-4 checked:before:bg-gray-900 hover:before:opacity-10"
                                        />
                                        <span
                                            className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                            stroke="currentColor" strokeWidth="1">
                                            <circle cx="10" cy="10" r="7"  fill="transparent" stroke="transparent"/>
                                            </svg>
                                        </span>
                                        </label>
                                    </div>
                                    <label htmlFor="Cash" className="block text-sm font-medium leading-6 text-black">
                                        Cash Payment
                                    </label>
                                    </div>
                                    <div className="flex items-center gap-x-3 sm:col-span-2">
                                    
                                    <div className="flex h-6 items-center">
                                        <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="Call">
                                        <input type="radio"
                                            id="Call"
                                            name="paymentMethod"
                                            value="Payment on Call"
                                            className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-slate-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:border-4 checked:before:bg-gray-900 hover:before:opacity-10"
                                        />
                                        <span
                                            className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                            stroke="currentColor" strokeWidth="1">
                                            <circle cx="10" cy="10" r="7"  fill="transparent" stroke="transparent"/>
                                            </svg>
                                        </span>
                                        </label>
                                    </div>
                                    <label htmlFor="Call" className="block text-sm font-medium leading-6 text-black">
                                        Payment on Call
                                    </label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="sm:col-span-2">
                            <div className="flex items-center sm:col-span-2">
                                <div className="block font-semibold leading-6 text-gray-900">
                                SubTotal:
                                </div>
                                <div className="ml-2.5">
                                    <span className="block text-sm font-semibold leading-6 text-gray-900">
                                        £{ searchParams.get("price")?.trim() } /-
                                    </span>
                                </div>
                            </div>
                        </div>
                        {searchParams.get("zoneCharges") && <div className="sm:col-span-2">
                            <div className="flex items-center sm:col-span-2">
                                <div className="block font-semibold leading-6 text-gray-900">
                                Zone/Area Charges:
                                </div>
                                <div className="ml-2.5">
                                    <span className="block text-sm font-semibold leading-6 text-gray-900">
                                        £{ searchParams.get("zoneCharges").trim() } /-
                                    </span>
                                </div>
                            </div>
                        </div>}
                        {searchParams.get("pickupParkingCharges") && <div className="sm:col-span-2">
                            <div className="flex items-center sm:col-span-2">
                                <div className="block font-semibold leading-6 text-gray-900">
                                Pickup Parking Charges:
                                </div>
                                <div className="ml-2.5">
                                    <span className="block text-sm font-semibold leading-6 text-gray-900">
                                        £{ searchParams.get("pickupParkingCharges").trim() } /-
                                    </span>
                                </div>
                            </div>
                        </div>}
                        {searchParams.get("dropoffParkingCharges") && <div className="sm:col-span-2">
                            <div className="flex items-center sm:col-span-2">
                                <div className="block font-semibold leading-6 text-gray-900">
                                Dropoff Parking Charges:
                                </div>
                                <div className="ml-2.5">
                                    <span className="block text-sm font-semibold leading-6 text-gray-900">
                                        £{ searchParams.get("dropoffParkingCharges").trim() } /-
                                    </span>
                                </div>
                            </div>
                        </div>}
                        <div className="sm:col-span-2">
                            <div className="flex items-center sm:col-span-2">
                                <div className="block font-semibold leading-6 text-gray-900">
                                Total:
                                </div>
                                <div className="ml-2.5">
                                    <span className="block text-sm font-semibold leading-6 text-gray-900">
                                        £<span className="text-base font-semibold leading-7 text-center" style={{color: props.themeColor}}>{ toTwoDigits(totalPrice,2) }</span> /-
                                        <input type="hidden" name="totalPrice" value={ toTwoDigits(totalPrice,2) } />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 customFocusOutline" style={{ "--theme-color": props.themeColor, backgroundColor: props.themeColor } as React.CSSProperties}
                    >
                        Confirm
                    </button>
                    </div>
                </div>
            </div>
            <div className="flex-1 shadow-lg ring-1 ring-gray-300 rounded-xl mx-3 my-6 p-6">
                <div className="mx-auto max-w-xl">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                        <div className="flex items-center my-2 sm:col-span-2">
                            <div className="block font-semibold leading-6 text-gray-900">
                            Pick up Location:
                            </div>
                            <div className="ml-2.5 text-sm">
                            { searchParams.get("pickupAddress") }
                            </div>
                        </div>
                        {searchParams.get("via1Address") && <div className="flex items-center my-2 sm:col-span-2">
                            <div className="block font-semibold leading-6 text-gray-900">
                            Via Location 1:
                            </div>
                            <div className="ml-2.5 text-sm">
                            { searchParams.get("via1Address") }
                            </div>
                        </div>}
                        {searchParams.get("via2Address") && <div className="flex items-center my-2 sm:col-span-2">
                            <div className="block font-semibold leading-6 text-gray-900">
                            Via Location 2:
                            </div>
                            <div className="ml-2.5 text-sm">
                            { searchParams.get("via2Address") }
                            </div>
                        </div>}
                        <div className="flex items-center my-2 sm:col-span-2">
                            <div className="block font-semibold leading-6 text-gray-900">
                            Drop off Location:
                            </div>
                            <div className="ml-2.5 text-sm">
                            { searchParams.get("dropoffAddress") }
                            </div>
                        </div>
                        <div className="flex items-center my-2 sm:col-span-2">
                            <div className="block font-semibold leading-6 text-gray-900">
                            Pick up Time:
                            </div>
                            <div className="ml-2.5 text-sm">
                            { searchParams.get("pickupTime") }
                            </div>
                        </div>
                        {searchParams.get("returnTime")?.trim() != "" && <div className="flex items-center my-2 sm:col-span-2">
                            <div className="block font-semibold leading-6 text-gray-900">
                            Return Time:
                            </div>
                            <div className="ml-2.5 text-sm">
                            { searchParams.get("returnTime") }
                            </div>
                        </div>}
                        <div className="flex items-center my-2">
                            <div className="block font-semibold leading-6 text-gray-900">
                            Passenger(s):
                            </div>
                            <div className="ml-2.5 text-sm">
                            { searchParams.get("Passenger") }
                            </div>
                        </div>
                        <div className="flex items-center my-2">
                            <div className="block font-semibold leading-6 text-gray-900">
                            Luggage:
                            </div>
                            <div className="ml-2.5 text-sm">
                            { searchParams.get("luggage") }
                            </div>
                        </div>
                        <div className="flex items-center my-2 sm:col-span-2">
                            <div className="block font-semibold leading-6 text-gray-900">
                            Vehicle:
                            </div>
                            <div className="ml-2.5 text-sm">
                            { searchParams.get("vehicle") }
                            </div>
                        </div>
                        
                        <div className="sm:col-span-2">
                            <h2 className="text-base font-semibold leading-7 text-center" style={{color: props.themeColor}}>Flight Details</h2>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                            Airline
                            </label>
                            <div className="mt-2.5">
                            <input
                                type="text"
                                name="airline"
                                id="airline"
                                autoComplete="airline"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 customFocusRing" style={{ "--theme-color": props.themeColor } as React.CSSProperties}
                            />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                            Arrival Flight Number
                            </label>
                            <div className="relative mt-2.5">
                            <input
                                type="text"
                                name="arrivalFlightNumber"
                                id="arrivalFlightNumber"
                                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 customFocusRing" style={{ "--theme-color": props.themeColor } as React.CSSProperties}
                            />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                            Flight Arrival Time
                            </label>
                            <div className="relative mt-2.5">
                            <input
                                type="text"
                                name="flightArrivalTime"
                                id="flightArrivalTime"
                                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 customFocusRing" style={{ "--theme-color": props.themeColor } as React.CSSProperties}
                            />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                            Terminal / Gate
                            </label>
                            <div className="relative mt-2.5">
                            <input
                                type="text"
                                name="terminal"
                                id="terminal"
                                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 customFocusRing" style={{ "--theme-color": props.themeColor } as React.CSSProperties}
                            />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}