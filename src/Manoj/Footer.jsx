import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <div>
        <div className='body'>
        <section className='Main'>
            <div className='Contact'>
                <h1>Contact Info</h1>
                <p>If you have any Questions or need any assistance, feel free to reach out to us </p>
                <h2>Phone:9363074799</h2>
                <h2>Email:manoj220302@gmail.com</h2>
                <h2>Address:Salem-636107</h2>
            </div>
            <div className='Social'>
                <h1>Follow Us</h1>
                <p>Linkedin</p>
            </div>
            <div className='hours'>
                <h1>Business Hours</h1>
                <h3>mon-Fri:9 Am -5 Am</h3>
                <p>sat-sun:Closed</p>
            </div>
        </section>
        </div>
    </div>
  )
}

export default Footer