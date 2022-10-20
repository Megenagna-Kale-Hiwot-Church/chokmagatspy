import * as React from "react"
import type { HeadFC } from "gatsby"
import NavBar from './../components/NavBar'
// import Footer from './../components/Footer'
import Home from './Home'
// import Book from "./Books"
// import Article from './Article'
// import ArticlePage from "./ArticlePage"

import About from "./../pages/About"





const IndexPage = () => {
  
//   const userRouter = () => {
//       return (
//           <Router>
//               <NavBar />     
//               <Routes >
//                   <Route path="/" element = {<Home />}/>
//                   <Route path="/question" element = {<Question />}/>
//                   <Route path="/bookdescription" element = {<BookDescription />}/>
//                   <Route path="/articlepage" element = {<ArticlePage />}/>
//                   <Route path="/article" element={<Article />} />
//                   <Route path="/about" element={<About />} />
//                   <Route path="/donate" element = {<Donate />}/>
//                   <Route path="/book" element={<Book />} />
//                   <Route path="/questoindescription" element={<QuestionDescription />} />
                 
//               </Routes >   
//                <Footer />
//           </Router>
//       )
//   }

//   const adminRouter = () => {
//       return (
//           <Router>
//               <Routes>
//                   <Route path="/" element = {<Admin />}/>
//               </Routes>
//           </Router>
//       )
//   }
  return (
      <div className='w-full h-screen '>
          <NavBar/>
          <Home />
          {/* { navState.userType == "as" ? adminRouter() : userRouter() } */}
      </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
