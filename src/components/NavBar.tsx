import React from "react";
import type { FC } from "react";

import styles from "../styles/components/NavBar.module.css";
import { Link } from "react-router-dom";
// import { ThemeSwitch } from "components/ThemeSwitch";

export const NavBar: FC = () => (
  <div className={styles.navBarWrapper}>
    <nav className={[styles.navBar, "container"].join(" ")}>
      <Link
        to="/"
        className="text-inherit dark:text-inherit text-3xl font- sm:hidden"
      >
        Petryk
      </Link>

      <div className="sm:space-x-8 space-x-4 font-semibold text-lg flex">
        <Link to="/" className="text-inherit dark:text-inherit self-center">
          home
        </Link>
        <Link
          to="/about"
          className="text-inherit dark:text-inherit self-center"
        >
          about
        </Link>
      </div>

      {/*<div className="flex items-center"><ThemeSwitch /></div>*/}
    </nav>
  </div>
);
