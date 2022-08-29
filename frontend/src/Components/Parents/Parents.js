import React from 'react';
import { Link } from 'react-router-dom';
import './parents.css';
import { AiOutlineCheckCircle } from "react-icons/ai";
import image from './Group_2593_2x.png';


const Parents = () => {
  return (
     
    <div className='view'>
        
        <h3>Salut, Parents et Famille
           <br/> Cette application est pour vous !</h3>
       <div className='cardp'>
        <div className='card-view'> 
        <p>< AiOutlineCheckCircle/> Notre crèche vise à : Réaliser la croissance intégrée de l'enfant et lui apporter des compétences de vie dans un environnement sécuritaire et favorable qui répond à ses besoins, adopte sa personnalité et développe sa créativité.</p>
        <br/>
        <p>< AiOutlineCheckCircle/> Notre garderie est basée sur : l'apprentissage actif par la recherche et l'exploration et la capacité à penser de manière critique.</p>
        <br/>
        <p>Des activités pédagogiques ciblées et variées.</p>
        <p>Un programme d'apprentissage moderne et agréable.</p>
        <p>Cadres de gestion et d'éducation distingués avec expérience et hautes compétences.</p>
        </div>
        <div className='card-img'> 
          <img src={image} alt=""/>
        </div>
         
  
    </div>
         <div className='login'>   
            <Link to='/signupParent'><button>Créer un compte </button></Link>
            <Link to='/signinParent'><button>Déjà inscrit ?</button></Link> 
        </div>
        
</div>
  )
}

export default Parents