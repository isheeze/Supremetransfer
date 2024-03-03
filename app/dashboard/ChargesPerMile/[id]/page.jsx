import { updateChargesPerMile } from "@/app/lib/actions";
import { fetchChargesPerMile } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import { redirect } from "next/navigation";
import { auth } from "@/app/auth";

const SingleChargesPerMilePage = async ({ params }) => {
  const {user} = await auth();
  if(user.role != 'admin'){
    redirect('/dashboard')
  }
  const { id } = params;
  const chargesPerMile = await fetchChargesPerMile(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        {chargesPerMile.id}
      </div>
      <div className={styles.formContainer}>
        <form action={updateChargesPerMile} className={styles.form}>
          <input type="hidden" name="id" value={chargesPerMile.id} />
          <label>Pickup</label>
          <input type="text" name="min" placeholder={chargesPerMile.min} />
          <label>Dropoff</label>
          <input type="text" name="max" placeholder={chargesPerMile.max} />
          <label>Price</label>
          <input type="text" name="price" placeholder={chargesPerMile.price} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleChargesPerMilePage;
