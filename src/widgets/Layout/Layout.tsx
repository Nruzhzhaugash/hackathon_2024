import React, { ReactNode } from "react";
import Header from "./Header/ui/Header";
import Footer from "./Footer/ui/Footer";

interface LayoutProps {
  children: ReactNode;
  type?: "login" | "profile";
}

export default function Layout({ children, type }: LayoutProps) {
  return (
    <main className="main">
      {type === "login" || type === "profile" ? (
        <>
          <Header>
            {children}
          </Header>
          <Footer />
        </>
      ) : (
        <>
          <Header/>
            {children}
          <Footer />
        </>
      )} 
    </main>
  )
}