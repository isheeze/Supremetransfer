import { addChargesPerMile } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";
import { redirect } from "next/navigation";
import { auth } from "@/app/auth";

const AddChargesPerMilesPage = async() => {
  const {user} = await auth();
  if(user.role != 'admin'){
    redirect('/dashboard')
  }

  return (
    <div className={styles.container}>
      <form action={addChargesPerMile} className={styles.form}>
        <input type="text" placeholder="min" name="min" required />
        <input type="text" placeholder="max" name="max" required />
        <input type="number" placeholder="price per mile" name="price" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddChargesPerMilesPage;
