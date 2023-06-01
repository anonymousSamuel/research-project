import SidebarElements from "../SidebarElements/SidebarElements";
import classes from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={classes.Sidebar}>
      <SidebarElements />
    </div>
  );
}
