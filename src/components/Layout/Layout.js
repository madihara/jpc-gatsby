import React from "react"
import NavBar from "../navbar/NavBar"
import Footer from "../footer/Footer"

const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
    <Footer />
  </>
)

export default Layout