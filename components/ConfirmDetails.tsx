'use client'
import { useSearchParams } from "next/navigation"

export default async function ConfirmOrder(props: any) {
    const searchParams = useSearchParams();
    
    const zoneCharges = searchParams.get("zoneCharges")
    const price = searchParams.get("price")

    return (
        <div className="mx-auto max-w-xl">
            <h2 className="text-base font-semibold leading-7 text-center" style={{color: props.themeColor}}>{ searchParams.get("paymentMethod") }</h2>
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
                                £<span className="text-base font-semibold leading-7 text-center" style={{color: props.themeColor}}>{ searchParams.get("totalPrice") }</span> /-
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}