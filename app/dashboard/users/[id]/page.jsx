import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
import { redirect } from "next/navigation";
import { auth } from "@/app/auth";

const SingleUserPage = async ({ params }) => {
  var userr = await auth();
  userr = userr.user
  const { id } = params;


  if(userr.role == 'admin' || userr.id == id){
  }else{
    redirect('/dashboard')
  }
  
  const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || "/noavatar.png"} alt="" fill className="object-cover"/>
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id}/>
          <label>Username</label>
          <input type="text" name="username" placeholder={user.username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder={user.phone} />
          <label>Address</label>
          <textarea type="text" name="address" placeholder={user.address} />
          {userr.role == 'admin' &&
          <div>
            <label>Role</label>
            <select name="isAdmin" id="isAdmin">
              <option value={'admin'} selected={user.role == 'admin'}>Admin</option>
              <option value={'staff'} selected={user.role == 'staff'}>Staff</option>
              <option value={'user'} selected={user.role == 'user'}>User</option>
            </select>
            <label>Is Active?</label>
            <select name="isActive" id="isActive">
              <option value={true} selected={user.isActive}>Yes</option>
              <option value={false} selected={!user.isActive}>No</option>
            </select>
          </div>}
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
