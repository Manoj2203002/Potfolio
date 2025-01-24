import React from 'react'
import './Servies.scss'

const Services = () => {
  return (
    <div>
        <div className='top'>
            <h1 style={{textAlign:'center', color:'skyblue'}}> Our Services</h1>
            <div className='service'>
                <h2 className='head'>UI Designing</h2>
                <p>I can able to Designing the Web page as per the Customer Request</p>
            </div>
            <div className='service'>
                <h2 className='head'>MySql Database</h2>
                <p>Managing the Database and Developing new Database</p>
            </div>
            <div className='service'>
                <h2 className='head'>JDBC Connectivity</h2>
                <p>Managing Database using JDBC in Advance Java</p>
            </div>
            <div className='service'>
                <h2 className='head'>Mobile Application Development</h2>
                <p> Using Android Software To Develope the Mobile Aplication</p>
            </div>
        </div>
    </div>
  )
}

export default Services