import Image from "next/image";
import Navbar from "@/entities/Navbar/ui/Navbar";
import Button from "@/shared/ui/Button/Button";

import styles from "./styles.module.scss";
import { ReactNode } from "react";
import Logo from "@/shared/ui/icons/header/logo";

interface HeaderProps {
  children?: ReactNode;
  type?: "login" | "profile";
}

export default function Header({ children, type }: HeaderProps) {
  return (
    <header className='bg-primary py-[21px]'>
      <div className="flex items-center justify-between container">
        <div className={styles.logo}>
          <Logo />
        </div>
        <Navbar />
        <div className="flex items-center justify-center gap-[53px]">
          <Button label="Войти" className="text-link uppercase text-base font-extrabold"/>
          <Button label="Регистрация" className="text-link uppercase text-base font-extrabold"/>
        </div>
      </div>
    </header>
  );
}
