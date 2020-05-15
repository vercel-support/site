import React from "react"
//import { StaticKitProvider } from "@statickit/react"
import Header from "./header"
import Footer from "./footer"
import Head from "next/head"

const Layout = ({ children, className }) => {
  const baseMainClasses = "flex-1 w-full p-4 mx-auto sm:p-8"
  const mainClasses = baseMainClasses.concat(" ").concat(className)

  return (
    <>
      {/* <StaticKitProvider site="a3b65ef2871d"> */}
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

          <script
            data-name="BMC-Widget"
            src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
            data-id="blp"
            data-description="Support my open-source activities!"
            data-message=""
            data-color="#5F7FFF"
            data-position="right"
            data-x_margin="18"
            data-y_margin="18"
            defer
          ></script>
        </Head>

        <Header />

        <main className={mainClasses}> {children}</main>

        <Footer />
      </div>
      {/* </StaticKitProvider> */}
    </>
  )
}

Layout.defaultProps = {
  className: "container",
}

export default Layout
