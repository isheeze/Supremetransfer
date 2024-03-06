import { addParkingCharges } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";
import { redirect } from "next/navigation";
import { auth } from "@/app/auth";

const AddParkingChargesPage = async() => {
  const {user} = await auth();
  if(user.role != 'admin'){
    redirect('/dashboard')
  }

  return (
    <div className={styles.container}>
      <form action={addParkingCharges} className={styles.form}>
        <input type="text" placeholder="pickup" name="pickup" required />
        <input type="text" placeholder="dropoff" name="dropoff" required />
        <input type="text" placeholder="price" name="price" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddParkingChargesPage;
