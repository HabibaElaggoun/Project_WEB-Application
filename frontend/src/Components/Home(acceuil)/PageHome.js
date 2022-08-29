import React from 'react'
import './PageHome.css'
import image from './monde.PNG'
import imag from "./images.png"

const PageHome = () => {
  return (
    <div>
    <img className="logo" src={image} alt="logo"/>

  <div className="section-center">
    <h1 className="mb-0">Mon Petit Monde</h1>
    
        <div className="row">
      <div className="descriptions">
      Utilisez l'application de garderie de "Mon Petit Monde" pour gérer votre centre, développer des relations avec les familles et soutenir la croissance et le développement de votre personnel, le tout en un seul endroit!
        </div>
        <div className='pict' >
        <img src={imag} alt="garderie"/>  
        </div>
    </div>
</div>
    </div>
  )
}

export default PageHome