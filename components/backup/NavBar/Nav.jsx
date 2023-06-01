import Image from "next/image";
import classes from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={classes.MainNav}>
      <div className={classes.MainNav_Left}>
        <Image alt="logo" src={"/logo.png"} width={150} height={50} />
      </div>
      <div className={classes.MainNav_Right}></div>
    </nav>
  );
}
