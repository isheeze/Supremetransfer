import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchRides } from "@/app/lib/data";

const RidesHistory = async (props) => {
  const q = props.searchParams?.q || "";
  const page = props.searchParams?.page || 1;
  const { count, rides } = await fetchRides(q, page);

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
            <td>status</td>
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
                <div className={p2p.status.trim() == 'draft' && `bg-indigo-700 rounded-lg text-center p-2` || p2p.status.trim() == 'Rejected' && `bg-red-700 rounded-lg text-center p-2` || p2p.status.trim() == 'Accepted' && `bg-green-700 rounded-lg text-center p-2`}>
                  {p2p.status}
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

export default RidesHistory;
