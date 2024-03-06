import { updateZoneCharges } from "@/app/lib/actions";
import { fetchZoneCharge } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import { redirect } from "next/navigation";
import { auth } from "@/app/auth";

const SingleZoneChargePage = async ({ params }) => {
  const {user} = await auth();
  if(user.role != 'admin'){
    redirect('/dashboard')
  }

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
          <label>Zone</label>
          <input type="text" name="zone" placeholder={zoneCharge.zone} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleZoneChargePage;
