import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import AddDriverForm from "@components/AddDriverForm";
import Image from "next/image";
import { redirect } from "next/navigation";
import { auth } from "@/app/auth";

const SingleDriverPage = async () => {
  const {user} = await auth();
  if(user.role != 'admin'){
    redirect('/dashboard')
  }

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"/noavatar.png"} alt="" fill className="object-cover"/>
        </div>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <AddDriverForm driver={null}/>
        </div>
      </div>
    </div>
  );
};

export default SingleDriverPage;
