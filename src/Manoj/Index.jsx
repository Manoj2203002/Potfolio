import React from 'react'
import './Header.scss'
const index = () => {
  let isdark=false;
  function Dark(){
    isdark=!isdark;
    document.getElementById('button').innerText=isdark?'Light':'Darkmode';
    if(isdark){
      document.body.style.backgroundColor="Black";
      document.body.style.color='white';
    }
    else{
      document.body.style.backgroundColor="white";
      document.body.style.color='black'
    }
  }
  return (
    <div>
        <div className='header'>
            <header className='mani'>
                    <nav className='nav'>
                        <h1>Manoj</h1>
                        <ul className='list'>
                          <li><a href="">Home</a></li>
                          <li><a href="">About</a></li>
                          <li><a href="">Services</a></li>
                          <button id='button' onClick={Dark}>Dark mode</button> 
                         </ul>
                </nav>
            </header>
        </div>
    </div>
  )
}
export default index