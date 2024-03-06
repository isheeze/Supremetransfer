import { updateParkingCharges } from "@/app/lib/actions";
import { fetchParkingCharge } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import { redirect } from "next/navigation";
import { auth } from "@/app/auth";

const SingleParkingChargePage = async ({ params }) => {
  const {user} = await auth();
  if(user.role != 'admin'){
    redirect('/dashboard')
  }

  const { id } = params;
  const parkingCharge = await fetchParkingCharge(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        {parkingCharge.id}
      </div>
      <div className={styles.formContainer}>
        <form action={updateParkingCharges} className={styles.form}>
          <input type="hidden" name="id" value={parkingCharge.id} />
          <label>Pickup</label>
          <input type="text" name="pickup" placeholder={parkingCharge.pickup} />
          <label>Dropoff</label>
          <input type="text" name="dropoff" placeholder={parkingCharge.dropoff} />
          <label>Price</label>
          <input type="text" name="price" placeholder={parkingCharge.price} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleParkingChargePage;
