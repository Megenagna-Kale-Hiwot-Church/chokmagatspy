import * as React from "react"
import type { HeadFC } from "gatsby"
import NavBar from './../components/NavBar'

import Home from './Home'


import About from "./../pages/About"

import Layout from "../components/Layout"



const IndexPage = () => {

  return (
      <div className='w-full h-screen '>
          <NavBar/>
          <Home />
  
      </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
