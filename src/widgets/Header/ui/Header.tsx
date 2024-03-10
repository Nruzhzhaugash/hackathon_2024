import styles from "./styles.module.scss";
import Image from "next/image";

import Navbar from "@/entities/Navbar/ui/Navbar";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.nav_wrapper}>
        <div className={styles.logo}>
          <Image src="" width={170} height={64} alt="logo" />
        </div>
        <Navbar />
        <div>
          <button>войти</button>
          <button>регистрация</button>
        </div>
      </div>
    </header>
  );
}
