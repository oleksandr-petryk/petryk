import React from "react";
import type { FC } from "react";

import styles from "../styles/components/NavBar.module.css";
// import { ThemeSwitch } from "components/ThemeSwitch";

export const NavBar: FC = () => (
  <div className={styles.navBarWrapper}>
    <nav className={[styles.navBar, "container"].join(" ")}>
      <a
        href="/"
        className="text-inherit dark:text-inherit text-3xl font- sm:hidden"
      >
        Petryk
      </a>

      <div className="sm:space-x-8 space-x-4 font-semibold text-lg flex">
        <a href="/" className="text-inherit dark:text-inherit self-center">
          home
        </a>
        <a href="/about" className="text-inherit dark:text-inherit self-center">
          about
        </a>
      </div>

      <div className="flex items-center">{/* <ThemeSwitch /> */}</div>
    </nav>
  </div>
);
