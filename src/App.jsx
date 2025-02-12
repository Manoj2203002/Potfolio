import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Index from './Manoj/Index'
import Footer from './Manoj/Footer'
import Manoj from './Manoj/Manoj'
import About from './Manoj/About'
import Services from './Manoj/Services'
const App = () => {

  return (
    <BrowserRouter>
    <Index/>
    <Routes>
      <Route path='/' element={<Manoj/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='*' element={<center><h1>404 Error</h1></center>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
