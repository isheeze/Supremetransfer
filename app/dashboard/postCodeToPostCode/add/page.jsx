import { addPostCodeToPostCode } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";
import { redirect } from "next/navigation";
import { auth } from "@/app/auth";

const AddPostCodeToPostCodePage = async () => {
  const {user} = await auth();
  if(user.role != 'admin'){
    redirect('/dashboard')
  }

  return (
    <div className={styles.container}>
      <form action={addPostCodeToPostCode} className={styles.form}>
        <input type="text" placeholder="pickup" name="pickup" required />
        <input type="text" placeholder="dropoff" name="dropoff" required />
        <input type="number" placeholder="price" name="price" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPostCodeToPostCodePage;
