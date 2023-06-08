import Image from "next/image";
import classes from "./Nav.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const NavLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  const [show, setShow] = useState(false);

  return (
    <nav className={classes.Nav}>
      <div className={classes.Logo_Nav}>Final Year Project</div>
      <div className={classes.Mobile}>
        <div className={classes.Hamburger} onClick={() => setShow(!show)}>
          <Image
            src="/icons/icons8-menu-96.png"
            width={50}
            height={50}
            alt="Menu"
          />
        </div>
        <div
          className={classes.Nav_mobile}
          style={{
            height: show ? "calc(100vh - 70px)" : "1px",
            padding: show ? "20px" : 0,
          }}
          onClick={() => setShow((prev) => !prev)}
        >
          {NavLinks.map((el, i) => {
            if (el.href == "/") {
              return (
                <span key={i}>
                  <Link href={el.href}>{el.name}</Link>
                </span>
              );
            }
            return (
              <span
                onClick={() =>
                  loader.isLoading == false && loader.setIsLoading(true)
                }
                key={i}
              >
                <Link href={el.href}>{el.name}</Link>
              </span>
            );
          })}
        </div>
      </div>
      <div
        className={classes.Nav_Desktop}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        {NavLinks.map((el, i) => {
          if (el.href == "/") {
            return (
              <span key={i}>
                <Link href={el.href}>{el.name}</Link>
              </span>
            );
          }
          return (
            <span
              onClick={() =>
                loader.isLoading == false && loader.setIsLoading(true)
              }
              key={i}
            >
              <Link href={el.href}>{el.name}</Link>
            </span>
          );
        })}
      </div>
    </nav>
  );
}
