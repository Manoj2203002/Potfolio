import React from 'react'
import './Manoj.scss'
import manoj from '../assets/Manoj.jpg'
const Manoj = () => {
  return (
    <div>
        <div className='main1'>
          <div className='img'>
            <img src={manoj} alt="" />
          </div>
          <div className='detial1'>
          <h1>Manoj Kumaresan</h1>
        <div className='detial'>
             <p>FullStackDeveoper</p>
             <p>Github: <a href="https://github.com/Manoj220302">Manoj220302</a></p>
             <p>Linked In: <a href="http://linkedin.com/in/manoj-k-759733305">Manoj Kumarean</a></p>
            <p>contact: <a href="mailto:manoj220302@gamil.com">Email Me</a></p>
            </div>
          </div>
       </div>
                      
    </div>
  )
}

export default Manoj