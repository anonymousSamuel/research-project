import { useState } from "react";
import classes from "./SidebarElements.module.css";
import Image from "next/image";

export function SidebarElement({ title, img, slug }) {
  return (
    <>
      <div className={classes.SideElement}>
        <span className={classes.tinyImage}>
          <Image width={20} height={20} src={`/icons/${img}.png`} alt={title} />
        </span>
        <span>{title}</span>
      </div>
    </>
  );
}

export default function SidebarElements() {
  const [sideElementsArr] = useState([
    { title: "Dashboard", slug: "dashboard", img: "home" },
    { title: "Expenses", slug: "expenses", img: "expenses" },
    { title: "Sales", slug: "Sales", img: "sales" },
    { title: "Reports", slug: "reports", img: "reports" },
  ]);
  return (
    <>
      {sideElementsArr.map((el, i) => (
        <SidebarElement title={el.title} slug={el.slug} img={el.img} key={i} />
      ))}
    </>
  );
}
