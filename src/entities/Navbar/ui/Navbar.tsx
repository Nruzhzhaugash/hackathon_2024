"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const session = useSession();

  console.log(session);

  return (
    <nav className="flex items-center gap-11">
      <Link
        href="/about "
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
        href="/news"
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
        href="/presenter-order"
        className="whitespace-nowrap font-obrazec uppercase font-extrabold text-link text-[32px]"
      >
        Заказ ведущего
      </Link>
    </nav>
  );
}
