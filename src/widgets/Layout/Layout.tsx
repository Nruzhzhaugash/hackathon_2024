'use client'
import React, { ReactNode, useState } from "react";
import Header from "./Header/ui/Header";
import Footer from "./Footer/ui/Footer";
import InsideBurger from "@/entities/Burger/ui/Burger";
import './styles.scss';

interface LayoutProps {
  children: ReactNode;
  type?: "login" | "profile";
}

export default function Layout({ children, type }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <> 
      {isMenuOpen && (
        <div className="burger__menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <InsideBurger />
        </div>
      )}
      <main className="main">
        {type === "login" && (
          <>
            <Header onClick={() => setIsMenuOpen(!isMenuOpen)} />
            {children}
            <Footer />
          </>
        )}
        {type === "profile" && (
          <>
            <Header onClick={() => setIsMenuOpen(!isMenuOpen)} />
            {children}
            <Footer />
          </>
        )}
      </main>
    </>
  );
}
