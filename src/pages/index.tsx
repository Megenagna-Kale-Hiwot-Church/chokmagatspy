import * as React from "react"
import type { HeadFC } from "gatsby"



const IndexPage = () => {
  return (
    <h1>this is hello world</h1>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
