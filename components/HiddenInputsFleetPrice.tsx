'use client'
import { useSearchParams } from "next/navigation"

export default function HiddenInputsFleetPrice() {
    const searchParams = useSearchParams();
    
    const pickupAddress = searchParams.get("pickupAddress")
    const pickupZipcode = searchParams.get("pickupZipcode")
    const pickupLat = searchParams.get("pickupLat")
    const pickupLng = searchParams.get("pickupLng")

    
    const via1Address = searchParams.get("via1Address")
    const via1Zipcode = searchParams.get("via1Zipcode")
    const via1Lat = searchParams.get("via1Lat")
    const via1Lng = searchParams.get("via1Lng")

    
    const via2Address = searchParams.get("via2Address")
    const via2Zipcode = searchParams.get("via2Zipcode")
    const via2Lat = searchParams.get("via2Lat")
    const via2Lng = searchParams.get("via2Lng")

    
    const dropoffAddress = searchParams.get("dropoffAddress")
    const dropoffZipcode = searchParams.get("dropoffZipcode")
    const dropoffLat = searchParams.get("dropoffLat")
    const dropoffLng = searchParams.get("dropoffLng")

    
    const ways = searchParams.get("ways")
    const pickupTime = searchParams.get("pickupTime")
    const returnTime = searchParams.get("returnTime")
    const Passenger = searchParams.get("Passenger")
    const luggage = searchParams.get("luggage")

    
    const infantSeats = searchParams.get("infant-seats")
    const babySeat = searchParams.get("baby-seat")
    const boosterSeat = searchParams.get("booster-seat")

    const price = searchParams.get("price")
    const zoneCharges = searchParams.get("zoneCharges")
    const vehicle = searchParams.get("vehicle")
    return (
        <div>
            {pickupAddress && <input type="hidden" name="pickupAddress" value={pickupAddress} />}
            {pickupZipcode && <input type="hidden" name="pickupZipcode" value={pickupZipcode} />}
            {pickupLat && <input type="hidden" name="pickupLat" value={pickupLat} />}
            {pickupLng && <input type="hidden" name="pickupLng" value={pickupLng} />}

            
            {via1Address && <input type="hidden" name="via1Address" value={via1Address} />}
            {via1Zipcode && <input type="hidden" name="via1Zipcode" value={via1Zipcode} />}
            {via1Lat && <input type="hidden" name="via1Lat" value={via1Lat} />}
            {via1Lng && <input type="hidden" name="via1Lng" value={via1Lng} />}

            
            {via2Address && <input type="hidden" name="via2Address" value={via2Address} />}
            {via2Zipcode && <input type="hidden" name="via2Zipcode" value={via2Zipcode} />}
            {via2Lat && <input type="hidden" name="via2Lat" value={via2Lat} />}
            {via2Lng && <input type="hidden" name="via2Lng" value={via2Lng} />}

            
            {dropoffAddress && <input type="hidden" name="dropoffAddress" value={dropoffAddress} />}
            {dropoffZipcode && <input type="hidden" name="dropoffZipcode" value={dropoffZipcode} />}
            {dropoffLat && <input type="hidden" name="dropoffLat" value={dropoffLat} />}
            {dropoffLng && <input type="hidden" name="dropoffLng" value={dropoffLng} />}

            
            {ways && <input type="hidden" name="ways" value={ways} />}
            {pickupTime && <input type="hidden" name="pickupTime" value={pickupTime} />}
            {returnTime && <input type="hidden" name="returnTime" value={returnTime} />}
            {Passenger && <input type="hidden" name="Passenger" value={Passenger} />}
            {luggage && <input type="hidden" name="luggage" value={luggage} />}

            
            {infantSeats && <input type="hidden" name="infantSeats" value={infantSeats} />}
            {babySeat && <input type="hidden" name="babySeat" value={babySeat} />}
            {boosterSeat && <input type="hidden" name="boosterSeat" value={boosterSeat} />}

            {price && <input type="hidden" name="price" value={price} />}
            {zoneCharges && <input type="hidden" name="zoneCharges" value={zoneCharges} />}
            {vehicle && <input type="hidden" name="vehicle" value={vehicle} />}
        </div>
    )
}