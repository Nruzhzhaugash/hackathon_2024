"use client";

// import styles from './styles.module.scss';
import { IProps } from "./props";
import { Header } from "widgets/Header/ui/Header/tsx";
import { Footer } from "widgets/Footer/ui/Footer.tsx";

export const AppContainer = (props: IProps) => {
  const { children } = props;

  return (
    <main className="app">
      <Header />
      {children}
      <Footer />
    </main>
  );
};
