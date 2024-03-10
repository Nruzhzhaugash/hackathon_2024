import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        <ul>
          <li>
            <Link href="/about">о клубе</Link>
          </li>
          <li>
            <Link href="/schedule">расписание</Link>
          </li>
          <li>
            <Link href="/catalog">каталог</Link>
          </li>
          <li>
            <Link href="/raiting">рейтинг</Link>
          </li>
          <li>
            <Link href="/shop">магазин</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
