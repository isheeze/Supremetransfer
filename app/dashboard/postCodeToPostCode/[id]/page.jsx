import { updatePostCodeToPostCode } from "@/app/lib/actions";
import { fetchPostCodeToPostCode } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import { redirect } from "next/navigation";
import { auth } from "@/app/auth";

const SinglePostCodeToPostCodePage = async ({ params }) => {
  const {user} = await auth();
  if(user.role != 'admin'){
    redirect('/dashboard')
  }

  const { id } = params;
  const postCodeToPostCode = await fetchPostCodeToPostCode(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        {postCodeToPostCode.id}
      </div>
      <div className={styles.formContainer}>
        <form action={updatePostCodeToPostCode} className={styles.form}>
          <input type="hidden" name="id" value={postCodeToPostCode.id} />
          <label>Pickup</label>
          <input type="text" name="pickup" placeholder={postCodeToPostCode.pickup} />
          <label>Dropoff</label>
          <input type="text" name="dropoff" placeholder={postCodeToPostCode.dropoff} />
          <label>Price</label>
          <input type="number" name="price" placeholder={postCodeToPostCode.price} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SinglePostCodeToPostCodePage;
