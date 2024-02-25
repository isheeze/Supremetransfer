import { updateZoneCharges } from "@/app/lib/actions";
import { fetchZoneCharge } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";

const SingleZoneChargePage = async ({ params }) => {
  const { id } = params;
  const zoneCharge = await fetchZoneCharge(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        {zoneCharge.id}
      </div>
      <div className={styles.formContainer}>
        <form action={updateZoneCharges} className={styles.form}>
          <input type="hidden" name="id" value={zoneCharge.id} />
          <label>Pickup</label>
          <input type="text" name="pickup" placeholder={zoneCharge.pickup} />
          <label>Dropoff</label>
          <input type="text" name="dropoff" placeholder={zoneCharge.dropoff} />
          <label>Price</label>
          <input type="number" name="price" placeholder={zoneCharge.price} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleZoneChargePage;
