import { fetchDrivers } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import { deleteCloudinaryDriver } from "@app/lib/cloudinary";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/app/auth";

const DriversPage = async ({ searchParams }) => {
  const {user} = await auth();
  if(user.role != 'admin'){
    redirect('/dashboard')
  }

  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, drivers } = await fetchDrivers(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a Driver..." />
        <Link href="/dashboard/drivers/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Mobile</td>
            <td>Created At</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.id}>
              <td>
                <div className={styles.user}>
                  <img
                    src={driver.picture || "/noavatar.png"}
                    alt={driver.drivername}
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {driver.fullName}
                </div>
              </td>
              <td>{driver.email}</td>
              <td>{driver.mobile}</td>
              <td>{driver.createdAt?.toString().slice(4, 16)}</td>
              <td>{driver.isActive ? "active" : "passive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/drivers/${driver.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteCloudinaryDriver}>
                    <input type="hidden" name="id" value={(driver.id)} />
                    {driver.picture_publickey && <input type="hidden" name="picture_publickey" value={(driver.picture_publickey)} />}
                    {driver.DVLALicense_publickey && <input type="hidden" name="DVLALicense_publickey" value={(driver.DVLALicense_publickey)} />}
                    {driver.DriverPCO_publickey && <input type="hidden" name="DriverPCO_publickey" value={(driver.DriverPCO_publickey)} />}
                    {driver.DriversNationalInsurance_publickey && <input type="hidden" name="DriversNationalInsurance_publickey" value={(driver.DriversNationalInsurance_publickey)} />}
                    {driver.VehicleLogBook_publickey && <input type="hidden" name="VehicleLogBook_publickey" value={(driver.VehicleLogBook_publickey)} />}
                    {driver.MOT_publickey && <input type="hidden" name="MOT_publickey" value={(driver.MOT_publickey)} />}
                    {driver.InsuranceCertificate_publickey && <input type="hidden" name="InsuranceCertificate_publickey" value={(driver.InsuranceCertificate_publickey)} />}
                    {driver.VehiclePCO_publickey && <input type="hidden" name="VehiclePCO_publickey" value={(driver.VehiclePCO_publickey)} />}
                    {driver.VehicleRentalAgreement_publickey && <input type="hidden" name="VehicleRentalAgreement_publickey" value={(driver.VehicleRentalAgreement_publickey)} />}
                    
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default DriversPage;
