import { addZoneCharges } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";
import { redirect } from "next/navigation";
import { auth } from "@/app/auth";

const AddZoneChargesPage = async() => {
  const {user} = await auth();
  if(user.role != 'admin'){
    redirect('/dashboard')
  }

  return (
    <div className={styles.container}>
      <form action={addZoneCharges} className={styles.form}>
        <input type="text" placeholder="zone" name="zone" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddZoneChargesPage;
