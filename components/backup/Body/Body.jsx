import MainContent from "../MainContent/MainContent";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./Body.module.css";

export default function Body() {
  return (
    <section className={classes.Body}>
      <Sidebar />
      <MainContent />
    </section>
  );
}
