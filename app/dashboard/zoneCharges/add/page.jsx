import { addZoneCharges } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddZoneChargesPage = () => {
  return (
    <div className={styles.container}>
      <form action={addZoneCharges} className={styles.form}>
        <input type="text" placeholder="pickup" name="pickup" required />
        <input type="text" placeholder="dropoff" name="dropoff" required />
        <input type="number" placeholder="price" name="price" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddZoneChargesPage;
