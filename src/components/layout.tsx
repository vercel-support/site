import Footer from "@components/footer";
import Header from "@components/header";
import * as React from "react";

export default function Layout({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const baseMainClasses =
    "flex-1 w-full container p-4 mx-auto sm:p-8 focus:outline-none";
  const mainClasses = baseMainClasses.concat(" ").concat(className);

  return (
    <div className="flex flex-col min-h-screen text-lg bg-gray-50">
      <a
        href="#skip-content-target"
        className="sr-only focus:not-sr-only focus:ring hover:ring"
      >
        Skip to main content
      </a>
      <Header />
      <main tabIndex={-1} id="skip-content-target" className={mainClasses}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
