import Image from "next/image";
import Navbar from "@/entities/Navbar/ui/Navbar";
import Button from "@/shared/ui/Button/Button";

import styles from "./styles.module.scss";
import { ReactNode } from "react";

interface HeaderProps {
  children?: ReactNode;
  type?: "login" | "profile";
}

export default function Header({ children, type }: HeaderProps) {
  return (
    <header className='container bg-primary flex justify-between items-center py-[21px]'>
      <div className={styles.logo}>
        <Image src="" width={170} height={64} alt="logo" />
      </div>
      <Navbar />
      <div className="flex gap-[53px]">
        <Button label="Войти" className="text-link uppercase text-[32px]"/>
        <Button label="Регистрация" className="text-link uppercase text-[32px]" />
      </div>
    </header>
  );
}
