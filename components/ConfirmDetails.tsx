'use client'
import { useSearchParams } from "next/navigation"
import { useEffect } from "react";
import { fetchRide } from "@app/lib/data"
import { addRides } from "@app/lib/actions";

export default async function ConfirmOrder(props: any) {
    const searchParams = useSearchParams();
    
    const zoneCharges = searchParams.get("zoneCharges")
    const price = searchParams.get("price")

    useEffect(()=>{
        (async () => {
            const id = searchParams.get("_id")
            const ride = await fetchRide(id)

            if(!ride.id){
                let formData = new FormData()

                id && formData.set('_id',id)

                let pickup = searchParams.get("pickup")
                pickup && formData.set('pickup', pickup)
                let via1 = searchParams.get("via1")
                via1 && formData.set('via1', via1)
                let via2 = searchParams.get("via2")
                via2 && formData.set('via2', via2)
                let dropoff = searchParams.get("dropoff")
                dropoff && formData.set('dropoff', dropoff)
                let direction = searchParams.get("direction")
                direction && formData.set('direction', direction)
                let pickupTime = searchParams.get("pickupTime")
                pickupTime && formData.set('pickupTime', pickupTime)
                let returnTime = searchParams.get("returnTime")
                returnTime && formData.set('returnTime', returnTime)
                let passengers = searchParams.get("passengers")
                passengers && formData.set('passengers', passengers)
                let luggage = searchParams.get("luggage")
                luggage && formData.set('luggage', luggage)
                let infantSeat = searchParams.get("infantSeat")
                infantSeat && formData.set('infantSeat', infantSeat)
                let babySeat = searchParams.get("babySeat")
                babySeat && formData.set('babySeat', babySeat)
                let boosterSeat = searchParams.get("boosterSeat")
                boosterSeat && formData.set('boosterSeat', boosterSeat)
                let price = searchParams.get("price")
                price && formData.set('price', price)
                let vehicle = searchParams.get("vehicle")
                vehicle && formData.set('vehicle', vehicle)
                let clientName = searchParams.get("clientName")
                clientName && formData.set('clientName', clientName)
                let clientPhone = searchParams.get("clientPhone")
                clientPhone && formData.set('clientPhone', clientPhone)
                let clientEmail = searchParams.get("clientEmail")
                clientEmail && formData.set('clientEmail', clientEmail)
                let note = searchParams.get("note")
                note && formData.set('note', note)
                let airline = searchParams.get("airline")
                airline && formData.set('airline', airline)
                let arrivalFlightNumber = searchParams.get("arrivalFlightNumber")
                arrivalFlightNumber && formData.set('arrivalFlightNumber', arrivalFlightNumber)
                let flightArrivalTime = searchParams.get("flightArrivalTime")
                flightArrivalTime && formData.set('flightArrivalTime', flightArrivalTime)
                let terminal = searchParams.get("terminal")
                terminal && formData.set('terminal', terminal)
                let paymentMethod = searchParams.get("paymentMethod")
                paymentMethod && formData.set('paymentMethod', paymentMethod)
                let status = searchParams.get("status")
                status && formData.set('status', status)

                addRides(formData)
                console.log("Ride Added")
            }else{
                console.log("Rided already exists: ", ride)
            }
        })()
    })
    return (
        <div className="mx-auto max-w-xl">
            <h2 className="text-base font-semibold leading-7 text-center" style={{color: props.themeColor}}>{ searchParams.get("payment") }</h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                <div className="flex items-center my-2 sm:col-span-2">
                    <div className="block font-semibold leading-6 text-gray-900">
                    Name:
                    </div>
                    <div className="ml-2.5 text-sm">
                    { searchParams.get("clientName") }
                    </div>
                </div>
                <div className="flex items-center my-2 sm:col-span-2">
                    <div className="block font-semibold leading-6 text-gray-900">
                    Email:
                    </div>
                    <div className="ml-2.5 text-sm">
                    { searchParams.get("clientEmail") }
                    </div>
                </div>
                <div className="flex items-center my-2 sm:col-span-2">
                    <div className="block font-semibold leading-6 text-gray-900">
                    Phone:
                    </div>
                    <div className="ml-2.5 text-sm">
                    { searchParams.get("clientPhone") }
                    </div>
                </div>
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
                    <h2 className="text-base font-semibold leading-7 text-center" style={{color: props.themeColor}}>Price Details</h2>
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
                                £{ searchParams.get("zoneCharges")?.trim() } /-
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
                                £<span className="text-base font-semibold leading-7 text-center" style={{color: props.themeColor}}>{ searchParams.get("zoneCharges")? parseFloat(zoneCharges || "") + parseFloat(price || "") : price }</span> /-
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}