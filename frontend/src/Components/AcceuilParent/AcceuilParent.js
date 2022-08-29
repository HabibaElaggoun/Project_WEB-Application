import React from 'react'
import './acceuil.css'
import { BiDetail } from 'react-icons/bi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { MdOutlineNoteAlt } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AcceuilParent = () => {
  return ( 
   <div className='acceuil'>
    <div className='acc'>
<h1>Salut Parent !</h1>
<h3> Merci de votre intérêt pour "Mon Petit Monde" !</h3>
<h3> Voulez-vous des mises à jour en temps réel de la journée de votre enfant ? <br/>
  Ajouter vos enfants, se connecter avec leurs éducateurs, voir des photos et faire enregistrer numériquement toutes leurs notes de développement ?</h3>
  </div>
  <div>
  <div className="row1-container">
    <div className="box box-down cyan">
    <h2>Activité</h2>
    <Link to="/activitielist">
      <div style={{fontSize:"50px" , textAlign:"center", color:"cyan"}}><BiDetail/></div>
    </Link></div>
      
    <div className="box box-down red">
      <Link to="/registerChildren"><h2>Ajouter un enfant</h2>
      
      <div style={{fontSize:"50px" , textAlign:"center", color:"red"}}><AiOutlineUserAdd/></div>
   </Link> </div>
  </div>
  
</div>



   </div>
  )
}

export default AcceuilParent