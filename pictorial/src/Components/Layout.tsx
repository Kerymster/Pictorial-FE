import React, { ReactNode } from "react";
import Footer from "./sections/Footer";
import Header from "./sections/PageHeader";

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
