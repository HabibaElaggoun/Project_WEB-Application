import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './educateur.css'
import image from './Mask_Group_1_2x.png'

const Educateurs = () => {
  return (
    <div className='view'>
        
        <h3>Soyez un super-héros de la petite enfance avec l'application préférée de tous !</h3>
        <div className='cardp'>
        <div className='card-view'> 
        <p>< AiOutlineCheckCircle/> Gardez facilement une trace de votre classe tous les jours. Avec HiChildren, les éducateurs peuvent présenter tout leur travail important et comment cela contribue au développement et au bien-être de leurs fils.</p>
        <br/>
        <p> Devenez un super héros de la petite enfance !</p>
        </div>
        <div className='card-img'> 
          <img src={image} alt=""/>
        </div>

         </div>
         <div className='login'>   
            <Link to='/signupEducateur'><button>Créer un compte </button> </Link>
            <Link to='/signinEducateur'><button>Déjà inscrit ?</button></Link> 
        </div>
        
</div>
  )
}

export default Educateurs