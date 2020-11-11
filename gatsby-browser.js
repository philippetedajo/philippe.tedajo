import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import Layout from "./src/components/layout"

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  //  console.log(props)
  return <Layout {...props}>{element}</Layout>
}
