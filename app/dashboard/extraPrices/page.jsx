import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchExtraPrices } from "@/app/lib/data";
import { deleteExtraPrices } from "@/app/lib/actions";
import { redirect } from "next/navigation";
import { auth } from "@/app/auth";

const ExtraPrices = async ({ searchParams }) => {
  const {user} = await auth();
  if(user.role != 'admin'){
    redirect('/dashboard')
  }

  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, extraPrices } = await fetchExtraPrices(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a zone..." />
        <Link href="/dashboard/extraPrices/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Price</td>
            <td>Created At</td>
          </tr>
        </thead>
        <tbody>
          {extraPrices.map((p2p) => (
            <tr key={p2p.id}>
              <td>{p2p.title}</td>
              <td>{p2p.price}</td>
              <td>{p2p.createdAt?.toString().slice(4, 16)}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/extraPrices/${p2p.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteExtraPrices}>
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

export default ExtraPrices;
