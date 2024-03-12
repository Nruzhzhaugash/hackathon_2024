import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-11">
      <Link
        href="/"
        className="whitespace-nowrap font-obrazec uppercase font-extrabold text-link text-[32px]"
      >
        О клубе
      </Link>
      <Link
        href="/shedule"
        className="whitespace-nowrap font-obrazec uppercase font-extrabold text-link text-[32px]"
      >
        Расписание
      </Link>
      <Link
        href=""
        className="whitespace-nowrap font-obrazec uppercase font-extrabold text-link text-[32px]"
      >
        Новости
      </Link>
      <Link
        href="/rating"
        className="whitespace-nowrap font-obrazec uppercase font-extrabold text-link text-[32px]"
      >
        Рейтинг
      </Link>
      <Link
        href=""
        className="whitespace-nowrap font-obrazec uppercase font-extrabold text-link text-[32px]"
      >
        Магазин
      </Link>
    </nav>
  );
}
