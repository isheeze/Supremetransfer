import { updateExtraPrices } from "@/app/lib/actions";
import { fetchExtraPrice } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import { redirect } from "next/navigation";
import { auth } from "@/app/auth";

const SingleExtraPricePage = async ({ params }) => {
  const {user} = await auth();
  if(user.role != 'admin'){
    redirect('/dashboard')
  }

  const { id } = params;
  const extraPrice = await fetchextraPrice(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        {extraPrice.id}
      </div>
      <div className={styles.formContainer}>
        <form action={updateExtraPrices} className={styles.form}>
          <input type="hidden" name="id" value={extraPrice.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={extraPrice.title} />
          <label>Price</label>
          <input type="text" name="price" placeholder={extraPrice.price} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleExtraPricePage;
