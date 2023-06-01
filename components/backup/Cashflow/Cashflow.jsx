import classes from "./Cashflow.module.css";

export default function Cashflow() {
  return (
    <div className={classes.Cashflow_Container}>
      <div className={classes.Left_side}>
        <span>Cashflow</span>
        <select className={classes.Select}>
          <option>Past 24 hours</option>
          <option>Past 1 month</option>
          <option>Past 12 months</option>
        </select>
      </div>
      <div className={classes.Right_side}>
        <button>Sales / Expenses</button>
      </div>
    </div>
  );
}
