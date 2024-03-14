import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-11">
      <Link
        href="/about"
        className="hover:text-opacity-80 whitespace-nowrap font-obrazec uppercase font-extrabold text-link text-[32px]"
      >
        О клубе
      </Link>
      <Link
        href="/shedule"
        className="hover:text-opacity-80 transition-all whitespace-nowrap font-obrazec uppercase font-extrabold text-link text-[32px]"
      >
        Расписание
      </Link>
      <Link
        href=""
        className="hover:text-opacity-80 whitespace-nowrap font-obrazec uppercase font-extrabold text-link text-[32px]"
      >
        Новости
      </Link>
      <Link
        href="/rating"
        className="hover:text-opacity-80 whitespace-nowrap font-obrazec uppercase font-extrabold text-link text-[32px]"
      >
        Рейтинг
      </Link>
      <Link
        href="/presenter-order"
        className="hover:text-opacity-80 whitespace-nowrap font-obrazec uppercase font-extrabold text-link text-[32px]"
      >
        Заказ ведущего
      </Link>
    </nav>
  );
}
