import Footer from "@components/footer";
import Header from "@components/header";
import * as React from "react";
import { cx } from "@/styles";
import SEO from "@components/seo";
import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";
import Link from "@components/Link";

const components = {
  img: Image,
  a: Link,
};

export default function Layout({
  children,
  className,
  meta,
}: {
  children?: React.ReactNode;
  className?: string;
  meta: {
    title: string;
    description: string;
  };
}) {
  const classes = cx(
    "flex-1 w-full container p-4 mx-auto sm:p-8 focus:outline-none",
    className
  );

  return (
    <MDXProvider components={components}>
      <SEO title={meta.title} description={meta.description} />
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
    </MDXProvider>
  );
}
