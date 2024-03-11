import React from "react";
import Link from "next/link";
// import styles from "./styles.module.scss";

export default function Navbar() {
  return (
    <nav className='flex items-center gap-11'>
      <Link href='' className="whitespace-nowrap  uppercase font-extrabold text-link text-lg">О клубе</Link>
      <Link href='' className="whitespace-nowrap uppercase font-extrabold text-link text-base">Расписание</Link>
      <Link href='' className="whitespace-nowrap uppercase font-extrabold text-link text-base">Каталог</Link>
      <Link href='' className="whitespace-nowrap uppercase font-extrabold text-link text-base">Рейтинг</Link>
      <Link href='' className="whitespace-nowrap uppercase font-extrabold text-link text-base">Магазин</Link>
    </nav>
  );
}
