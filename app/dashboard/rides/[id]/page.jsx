import { updateRides } from "@/app/lib/actions";
import { fetchRide } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import { redirect } from "next/navigation";
import { auth } from "@/app/auth";

const SingleRidePage = async ({ params }) => {
  const {user} = await auth();
  if(user.role != 'admin'){
    redirect('/dashboard')
  }
  const { id } = params;
  const ride = await fetchRide(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        {ride.id}
      </div>
      <div className={styles.formContainer}>
        <form action={updateRides} className={styles.form}>
          <input type="hidden" name="id" value={ride.id} />
          <label>Pickup</label>
          <input type="text" name="pickup" placeholder={ride.pickup} />
          <label>Via1</label>
          <input type="text" name="via1" placeholder={ride.via1} />
          <label>Via2</label>
          <input type="text" name="via2" placeholder={ride.via2} />
          <label>dropoff</label>
          <input type="text" name="dropoff" placeholder={ride.dropoff} />
          <label>direction</label>
          <input type="text" name="direction" placeholder={ride.direction} />
          <label>pickupTime</label>
          <input type="text" name="pickupTime" placeholder={ride.pickupTime} />
          <label>returnTime</label>
          <input type="text" name="returnTime" placeholder={ride.returnTime} />
          <label>passengers</label>
          <input type="text" name="passengers" placeholder={ride.passengers} />
          <label>luggage</label>
          <input type="text" name="luggage" placeholder={ride.luggage} />
          <label>infantSeat</label>
          <input type="checkbox" name="infantSeat" defaultChecked={ride.infantSeat} />
          <label>babySeat</label>
          <input type="checkbox" name="babySeat" defaultChecked={ride.babySeat} />
          <label>boosterSeat</label>
          <input type="checkbox" name="boosterSeat" defaultChecked={ride.boosterSeat} />
          <label>price</label>
          <input type="text" name="price" value={ride.price} disabled/>
          <label>vehicle</label>
          <input type="text" name="vehicle" placeholder={ride.vehicle} />
          <label>clientName</label>
          <input type="text" name="clientName" placeholder={ride.clientName} />
          <label>clientPhone</label>
          <input type="text" name="clientPhone" placeholder={ride.clientPhone} />
          <label>clientEmail</label>
          <input type="text" name="clientEmail" placeholder={ride.clientEmail} />
          <label>note</label>
          <input type="text" name="note" placeholder={ride.note} />
          <label>airline</label>
          <input type="text" name="airline" placeholder={ride.airline} />
          <label>arrivalFlightNumber</label>
          <input type="text" name="arrivalFlightNumber" placeholder={ride.arrivalFlightNumber} />
          <label>flightArrivalTime</label>
          <input type="text" name="flightArrivalTime" placeholder={ride.flightArrivalTime} />
          <label>terminal</label>
          <input type="text" name="terminal" placeholder={ride.terminal} />

          <label>Status</label>
          <input type="text" name="Status" value={ride.Status} />
          
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleRidePage;
