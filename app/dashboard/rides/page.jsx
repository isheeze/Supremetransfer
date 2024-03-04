import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchRides } from "@/app/lib/data";
import { deleteRides } from "@/app/lib/actions";
import { redirect } from "next/navigation";
import { auth } from "@/app/auth";
import ImportCSV from '@components/ImportCSV'

const RidesPage = async ({ searchParams }) => {
  const {user} = await auth();
  if(user.role != 'admin'){
    redirect('/dashboard')
  }


  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, rides } = await fetchRides(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <ImportCSV />
      </div>
      <div className={styles.top}>
        <Search placeholder="Search for a charges..." />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>pickup</td>
            <td>via1</td>
            <td>via2</td>
            <td>dropoff</td>
            <td>price</td>
            <td>Created At</td>
          </tr>
        </thead>
        <tbody>
          {rides.map((p2p) => (
            <tr key={p2p.id}>
              <td>{p2p.pickupAddress}</td>
              <td>{p2p.via1Address}</td>
              <td>{p2p.via2Address}</td>
              <td>{p2p.dropoffAddress}</td>
              <td>{p2p.price}</td>
              <td>{p2p.createdAt?.toString().slice(4, 16)}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/rides/${p2p.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteRides}>
                    <input type="hidden" name="id" value={p2p.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
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

export default RidesPage;
