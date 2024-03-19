"use client";
import { ReactNode } from "react";
import Link from "next/link";

import Navbar from "@/entities/Navbar/ui/Navbar";
import Button from "@/shared/ui/Button/Button";
import Logo from "@/shared/ui/icons/header/logo";

import { useSession, signIn, signOut } from "next-auth/react";
import LogoHeader from "@/shared/ui/icons/header/logoHeader";
import Burger from "@/features/burger/ui/burger";

interface HeaderProps {
  children?: ReactNode;
  onClick?: any;
  type?: "login" | "profile";
}

export default function Header({ children, type, onClick }: HeaderProps) {
  const session = useSession();
  console.log(session);
  return (
    <header className="bg-primary py-[21px]">
      <div className="flex items-center justify-between container">
        <Link href="/" className="logo mmd:hidden">
          <Logo />
        </Link>
        <Link href={"/"} className="logo md:hidden">
          <LogoHeader />
        </Link>
        <Burger onClick={onClick} />
        <Navbar />
        <div className="mmd:hidden flex items-center justify-center gap-[53px]">
          {session?.data ? (
            <Link href={`/profile`}>
              <Button
                label="Профиль"
                className="text-link font-obrazec uppercase text-[32px] font-extrabold"
              />
            </Link>
          ) : (
            <Link href="/api/auth/signin">
              <Button
                label="Войти"
                className="text-link font-obrazec uppercase text-[32px] font-extrabold"
                onClick={() => signIn()}
              />
            </Link>
          )}
          {session?.data ? (
            <Link href="/">
              <Button
                label="Выйти"
                className="text-link font-obrazec uppercase text-[32px] font-extrabold"
                onClick={() =>
                  signOut({
                    callbackUrl: "/",
                  })
                }
              />
            </Link>
          ) : (
            <Link href="/registration">
              <Button
                label="Регистрация"
                className="text-link font-obrazec uppercase text-[32px] font-extrabold"
              />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
