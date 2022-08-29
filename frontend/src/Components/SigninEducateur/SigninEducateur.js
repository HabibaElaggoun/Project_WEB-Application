import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signinUserEducator } from '../../Redux/actions/userAction';
import '../SigninParents/signin.css';
import image from './uog-review-140.png';
import imageE from './Group_3407_2x.png';



const SigninEducateur = () => {
  const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const navigate=useNavigate()
    const dispatch=useDispatch()
  return (
    <div>
      <div>
      <div className='designin'>
      <img  src={image} alt=""/></div>
      <div className='design'>
       
      <img  src={imageE} alt=""/>
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
    
    <button onClick={(e)=>{e.preventDefault();dispatch(signinUserEducator({email,password}, navigate))}}>Connexion</button>
   
    <div className="social"><p>Vous n'avez pas de compte ?</p>
      <Link to='/signupEducateur'>Créer un compte </Link>
      </div>
  </form>
</div>

    </div>
    </div>
  )
}

export default SigninEducateur