import { cards } from "../lib/data";
import Card from "../ui/dashboard/card/card";
import RidesHistory from "../ui/dashboard/RidesHistory/RidesHistory";
import styles from "../ui/dashboard/dashboard.module.css";
import Transactions from "../ui/dashboard/transactions/transactions";

const Dashboard = async({ searchParams }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Transactions searchParams={searchParams}/>
        <RidesHistory searchParams={searchParams}/>
      </div>
    </div>
  );
};

export default Dashboard;
