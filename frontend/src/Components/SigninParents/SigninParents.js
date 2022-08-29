import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signinUserParent } from '../../Redux/actions/userAction'
import image from './Group_3407_2x.png';
import imageP from './Group_2593_2x.png'
import './signin.css';



const SigninParents = () => {
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const navigate=useNavigate()
    const dispatch=useDispatch()
  return (
    <div>
      <div className='designin'>
      <img  src={imageP} alt=""/></div>
      <div className='design'>
       
      <img  src={image} alt=""/>
        <div></div>
  <div className="background">
    <div className="shape" />
    <div className="shape" />
  </div>
  <form>
    <h3>Connectez-vous ici</h3>
    
    <label htmlFor="username">Email</label>
    <input type="text" placeholder="Votre Email " id="username" required onChange={(e)=>setEmail(e.target.value)} value={email}/>
    
    <label htmlFor="password">Mot de passe</label>
    <input type="password" placeholder="Votre mot de passe" id="password" required onChange={(e)=>setPassword(e.target.value)} value={password}/>
    
    <button onClick={(e)=>{e.preventDefault();dispatch(signinUserParent({email,password}, navigate))}}>Connexion</button>
   
    <div className="social"><p>Vous n'avez pas de compte ?</p>
      <Link to='/signupParent'>Créer un compte </Link>
      </div>
  </form>
</div>

    </div>
  )
}

export default SigninParents