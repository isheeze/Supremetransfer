import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdOutlineBubbleChart,
  MdAttachMoney,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import { auth, signOut } from "@/app/auth";

const Sidebar = async () => {
  const { user } = await auth()
  var menuItems =  []
  if(user.role == 'admin'){
    menuItems = [
      {
        title: "Pages",
        list: [
          {
            title: "Dashboard",
            path: "/dashboard",
            icon: <MdDashboard />,
          },
          {
            title: "Users",
            path: "/dashboard/users",
            icon: <MdSupervisedUserCircle />,
          },
          {
            title: "Post Codes to Post Codes",
            path: "/dashboard/postCodeToPostCode",
            icon: <MdOutlineBubbleChart />,
          },
          {
            title: "Zone Charges",
            path: "/dashboard/zoneCharges",
            icon: <MdOutlineBubbleChart />,
          },
          {
            title: "Charges Per Mile",
            path: "/dashboard/ChargesPerMile",
            icon: <MdOutlineBubbleChart />,
          },
          {
            title: "Drivers",
            path: "/dashboard/drivers",
            icon: <MdOutlineBubbleChart />,
          },
          {
            title: "Rides",
            path: "/dashboard/rides",
            icon: <MdOutlineBubbleChart />,
          },
        ],
      },
      {
        title: "User",
        list: [
          {
            title: "Settings",
            path: `/dashboard/users/${user.id}`,
            icon: <MdOutlineSettings />,
          },
          {
            title: "Help",
            path: "/dashboard/help",
            icon: <MdHelpCenter />,
          },
        ],
      },
    ];
  }
  if(user.role == 'staff'){
    menuItems = [
      {
        title: "Pages",
        list: [
          {
            title: "Dashboard",
            path: "/dashboard",
            icon: <MdDashboard />,
          },
        ],
      },
      {
        title: "User",
        list: [
          {
            title: "Settings",
            path: `/dashboard/users/${user.id}`,
            icon: <MdOutlineSettings />,
          },
          {
            title: "Help",
            path: "/dashboard/help",
            icon: <MdHelpCenter />,
          },
        ],
      },
    ];
  }
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{user.username}</span>
          <span className={styles.userTitle}>{user.role}</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      
      <form
      action={async () => {
        "use server";
        await signOut();
      }}  
      >
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
