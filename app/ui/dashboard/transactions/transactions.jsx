import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchDraftRides } from "@/app/lib/data";
import { acceptRide, rejectRide } from "@/app/lib/actions";
import { redirect } from "next/navigation";
import { auth } from "@/app/auth";

const Transactions = async (props) => {
  const q = props.searchParams?.q || "";
  const page = props.searchParams?.page || 1;
  const { count, rides } = await fetchDraftRides(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a Booking Reference..." />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>pickup</td>
            <td>dropoff</td>
            <td>price</td>
            <td>payment</td>
          </tr>
        </thead>
        <tbody>
          {rides.map((p2p) => (
            <tr key={p2p.id}>
              <td>{p2p.pickupAddress}</td>
              <td>{p2p.dropoffAddress}</td>
              <td>{p2p.price}</td>
              <td>{p2p.paymentMethod}</td>
              <td>
                <div className={styles.buttons}>
                  <form action={acceptRide}>
                    <input type="hidden" name="id" value={p2p.id} />
                    {p2p.pickupAddress && <input type="hidden" name="pickupAddress" value={p2p.pickupAddress} />}
                    {p2p.via1Address && <input type="hidden" name="via1Address" value={p2p.via1Address} />}
                    {p2p.via2Address && <input type="hidden" name="via2Address" value={p2p.via2Address} />}
                    {p2p.dropoffAddress && <input type="hidden" name="dropoffAddress" value={p2p.dropoffAddress} />}
                    {p2p.direction && <input type="hidden" name="direction" value={p2p.direction} />}
                    {p2p.pickupTime && <input type="hidden" name="pickupTime" value={p2p.pickupTime} />}
                    {p2p.returnTime && <input type="hidden" name="returnTime" value={p2p.returnTime} />}
                    {p2p.passenger && <input type="hidden" name="passenger" value={p2p.passenger} />}
                    {p2p.luggage && <input type="hidden" name="luggage" value={p2p.luggage} />}
                    {p2p.infantSeat && <input type="hidden" name="infantSeat" value={p2p.infantSeat} />}
                    {p2p.babySeat && <input type="hidden" name="babySeat" value={p2p.babySeat} />}
                    {p2p.boosterSeat && <input type="hidden" name="boosterSeat" value={p2p.boosterSeat} />}
                    {p2p.price && <input type="hidden" name="price" value={p2p.price} />}
                    {p2p.vehicle && <input type="hidden" name="vehicle" value={p2p.vehicle} />}
                    {p2p.clientName && <input type="hidden" name="clientName" value={p2p.clientName} />}
                    {p2p.clientPhone && <input type="hidden" name="clientPhone" value={p2p.clientPhone} />}
                    {p2p.clientEmail && <input type="hidden" name="clientEmail" value={p2p.clientEmail} />}
                    {p2p.note && <input type="hidden" name="note" value={p2p.note} />}
                    {p2p.airline && <input type="hidden" name="airline" value={p2p.airline} />}
                    {p2p.arrivalFlightNumber && <input type="hidden" name="arrivalFlightNumber" value={p2p.arrivalFlightNumber} />}
                    {p2p.flightArrivalTime && <input type="hidden" name="flightArrivalTime" value={p2p.flightArrivalTime} />}
                    {p2p.terminal && <input type="hidden" name="terminal" value={p2p.terminal} />}
                    {p2p.paymentMethod && <input type="hidden" name="paymentMethod" value={p2p.paymentMethod} />}
                    <button className={`${styles.button} ${styles.view}`}>
                      Accept
                    </button>
                  </form>
                  <form action={rejectRide}>
                    <input type="hidden" name="id" value={p2p.id} />
                    {p2p.pickupAddress && <input type="hidden" name="pickupAddress" value={p2p.pickupAddress} />}
                    {p2p.via1Address && <input type="hidden" name="via1Address" value={p2p.via1Address} />}
                    {p2p.via2Address && <input type="hidden" name="via2Address" value={p2p.via2Address} />}
                    {p2p.dropoffAddress && <input type="hidden" name="dropoffAddress" value={p2p.dropoffAddress} />}
                    {p2p.direction && <input type="hidden" name="direction" value={p2p.direction} />}
                    {p2p.pickupTime && <input type="hidden" name="pickupTime" value={p2p.pickupTime} />}
                    {p2p.returnTime && <input type="hidden" name="returnTime" value={p2p.returnTime} />}
                    {p2p.passenger && <input type="hidden" name="passenger" value={p2p.passenger} />}
                    {p2p.luggage && <input type="hidden" name="luggage" value={p2p.luggage} />}
                    {p2p.infantSeat && <input type="hidden" name="infantSeat" value={p2p.infantSeat} />}
                    {p2p.babySeat && <input type="hidden" name="babySeat" value={p2p.babySeat} />}
                    {p2p.boosterSeat && <input type="hidden" name="boosterSeat" value={p2p.boosterSeat} />}
                    {p2p.price && <input type="hidden" name="price" value={p2p.price} />}
                    {p2p.vehicle && <input type="hidden" name="vehicle" value={p2p.vehicle} />}
                    {p2p.clientName && <input type="hidden" name="clientName" value={p2p.clientName} />}
                    {p2p.clientPhone && <input type="hidden" name="clientPhone" value={p2p.clientPhone} />}
                    {p2p.clientEmail && <input type="hidden" name="clientEmail" value={p2p.clientEmail} />}
                    {p2p.note && <input type="hidden" name="note" value={p2p.note} />}
                    {p2p.airline && <input type="hidden" name="airline" value={p2p.airline} />}
                    {p2p.arrivalFlightNumber && <input type="hidden" name="arrivalFlightNumber" value={p2p.arrivalFlightNumber} />}
                    {p2p.flightArrivalTime && <input type="hidden" name="flightArrivalTime" value={p2p.flightArrivalTime} />}
                    {p2p.terminal && <input type="hidden" name="terminal" value={p2p.terminal} />}
                    {p2p.paymentMethod && <input type="hidden" name="paymentMethod" value={p2p.paymentMethod} />}
                    <button className={`${styles.button} ${styles.delete}`}>
                      Reject
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default Transactions;
