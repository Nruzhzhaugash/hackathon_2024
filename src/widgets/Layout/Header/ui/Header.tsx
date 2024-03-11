import { ReactNode } from "react";
import Link from "next/link";

import Navbar from "@/entities/Navbar/ui/Navbar";
import Button from "@/shared/ui/Button/Button";
import Logo from "@/shared/ui/icons/header/logo";

interface HeaderProps {
  children?: ReactNode;
  type?: "login" | "profile";
}

export default function Header({ children, type }: HeaderProps) {
  return (
    <header className='bg-primary py-[21px]'>
      <div className="flex items-center justify-between container">
        <Link href='/' className='logo'>
          <Logo />
        </Link>
        <Navbar />
        <div className="flex items-center justify-center gap-[53px]">
          <Button label="Войти" className="text-link uppercase text-[32px] font-obrazec font-extrabold"/>
          <Button label="Регистрация" className="text-link uppercase text-[32px] font-obrazec font-extrabold"/>
        </div>
      </div>
    </header>
  );
}
