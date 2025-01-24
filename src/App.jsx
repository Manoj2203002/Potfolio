import React from 'react'
import Index from './Manoj/Index'
import Footer from './Manoj/Footer'
import Manoj from './Manoj/Manoj'
import About from './Manoj/About'
import Services from './Manoj/Services'
const App = () => {

  return (
    <div>
      <header><Index></Index></header>
      <body>
      <Manoj/>
      <About/>
      <Services/>
      </body>
    <footer><Footer/></footer></div>
  )
}

export default App
