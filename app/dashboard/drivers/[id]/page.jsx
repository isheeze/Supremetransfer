import { fetchDriver } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import DriverForm from "@components/DriverForm";
import Image from "next/image";

import { redirect } from "next/navigation";
import { auth } from "@/app/auth";

const SingleDriverPage = async ({ params }) => {
  const {user} = await auth();
  if(user.role != 'admin'){
    redirect('/dashboard')
  }
  
  const { id } = params;
  const driver = await fetchDriver(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={driver.picture || "/noavatar.png"} alt="" fill className="object-cover"/>
        </div>
        {driver.fullName}
      </div>
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <DriverForm driver={driver}/>
        </div>
      </div>
    </div>
  );
};

export default SingleDriverPage;
