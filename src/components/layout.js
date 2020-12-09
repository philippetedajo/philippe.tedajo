import React, { useState } from "react"
import {
  Splashscreen,
  Header,
  HeaderResponsive,
  Cursor,
  Soon,
  SEO,
} from "../components"

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [iscomingSoon] = useState(false)

  setTimeout(function () {
    setIsLoading(false)
  }, 3000)

  return (
    <>
      <SEO />
      {iscomingSoon ? (
        <Soon />
      ) : (
        <>
          {isLoading ? (
            <Splashscreen />
          ) : (
            <div className="full-layout">
              <Header />
              <HeaderResponsive />
              <div className="full-content m-0 p-0 page">
                <>{children}</>
                <footer className="text-center my-3">
                  © 2020 P. All rights reserved
                </footer>
              </div>
              <Cursor />
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Layout
