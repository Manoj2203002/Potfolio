import React from 'react'
import './Manoj.scss'
import manoj from '../assets/Manoj.jpg'
const Manoj = () => {
  const handleclick=()=>{
    window.open('./ManojResume.pdf','_blank')
  }
  return (
    <div>
        <div className='main1'>
          <div className='img'>
            <img src={manoj} alt="" />
          </div>
          <div className='detial1'>
          <h1>Manoj Kumaresan</h1>
        <div className='detial'>
             <p>FullStack Developer</p>
             <p>Github: <a href="https://github.com/Manoj2203002">Manoj220302</a></p>
             <p>LinkedIn: <a href="http://linkedin.com/in/manoj-k-759733305">Manoj Kumarean</a></p>
             <p>Contact: <a href="mailto:manoj220302@gmail.com">Email Me</a></p>
            </div>
            <button onClick={handleclick}> My Resume</button>
          </div>
       </div>
                      
    </div>
  )
}

export default Manoj