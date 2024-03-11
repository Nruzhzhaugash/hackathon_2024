import React from "react";
import Link from "next/link";
// import styles from "./styles.module.scss";

export default function Navbar() {
  return (
    <nav className='flex gap-11'>
      <Link href='' className="whitespace-nowrap  uppercase font-extrabold text-link text-[32px]">О клубе</Link>
      <Link href='' className="whitespace-nowrap uppercase font-extrabold text-link text-[32px]">Расписание</Link>
      <Link href='' className="whitespace-nowrap uppercase font-extrabold text-link text-[32px]">Каталог</Link>
      <Link href='' className="whitespace-nowrap uppercase font-extrabold text-link text-[32px]">Рейтинг</Link>
      <Link href='' className="whitespace-nowrap uppercase font-extrabold text-link text-[32px]">Магазин</Link>
    </nav>
  );
}
