import Footer from "@components/footer";
import Header from "@components/header";
import * as React from "react";
import { cx } from "@/styles";

export default function Layout({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const classes = cx(
    "flex-1 w-full container p-4 mx-auto sm:p-8 focus:outline-none",
    className
  );

  return (
    <div className="flex flex-col min-h-screen text-lg bg-gray-50">
      <a
        href="#skip-content-target"
        className="sr-only focus:not-sr-only focus:ring hover:ring"
      >
        Skip to main content
      </a>
      <Header />
      <main tabIndex={-1} id="skip-content-target" className={classes}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
