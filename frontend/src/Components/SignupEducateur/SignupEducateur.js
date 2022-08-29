import React, { useState } from 'react'
import { AiOutlineLogin } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signupUser } from '../../Redux/actions/userAction'
import '../SignupParents/signup.css';
import photo from './Teacher-01_2x.png';


const SignupEducateur = () => {
    const [firstName, setFisrtName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone]= useState("")
	  const [email, setEmail] = useState("")
	  const [password, setPassword] = useState("") 
 
    const navigate=useNavigate()
    const dispatch=useDispatch()
  return (
       <div>
        <div style={{textAlign:"center"}}>
          <img src={photo} alt=""/>
        </div>
<div className="container-contact100" >
    <form className="contact100-form validate-form" style={{marginTop:"50px"}} >
      <span className="contact100-form-title">
        Bonjour !
      </span>
      <div className="wrap-input100 validate-input " data-validate="First name is required">
        <span className="label-input100 ">Prénom</span>
        <input className="input100" type="text" name="name" placeholder="Entrer votre Prénom" required onChange={(e)=>setFisrtName(e.target.value)} value={firstName} />
        <span/>
      </div>
      <div className="wrap-input100 validate-input " data-validate="Last name is required">
        <span className="label-input100">Nom</span>
        <input className="input100" type="text" name="name" placeholder="Entrez votre Nom de famille" required onChange={(e)=>setLastName(e.target.value)} value={lastName} />
        <span/>
      </div>
      <div className="wrap-input100 validate-input" data-validate="Addresse is required">
        <span className="label-input100">Addresse</span>
        <input className="input100" type="text" name="addresse" placeholder="Entrer votre addresse" required onChange={(e)=>setAddress(e.target.value)} value={address} />
        <span />
      </div>
      <div className="wrap-input100 validate-input" data-validate="Phone is required">
        <span className="label-input100">Téléphone</span>
        <input className="input100" type="text" name="téléphone" placeholder="Entrer votre Numéro de téléphone" required onChange={(e)=>setPhone(e.target.value)} value={phone} />
        <span/>
      </div>
      <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
        <span className="label-input100">Email</span>
        <input className="input100" type="text" name="email" placeholder="Entrer votre Email" required onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <span />
      </div>
      <div className="wrap-input100 validate-input" data-validate="Valid password is required: ex@abc.xyz">
        <span className="label-input100">Mot de passe</span>
        <input className="input100" type="text" name="password" placeholder="Entrer votre Mot de passe" required onChange={(e)=>setPassword(e.target.value)} value={password}/>
        <span  />
      </div>
       
      
      <div className="valid">
        
          <button  className="buttonsubmit" type="Sumbit" onClick={(e)=>{e.preventDefault();dispatch(signupUser({firstName, lastName, address, phone, email, password}, navigate))}}>     
              S'inscrire
          </button>
         </div> 
        <div className='login'>      
            <Link to='/educateurs'><button className="buttLogin"> Annuler <MdOutlineCancel/> </button></Link>
            <Link to='/signinEducateur'><button className="buttLogin"> Déjà inscrit ? <AiOutlineLogin/> </button></Link> 
        </div> 
        
    </form>
</div>
</div>

)
}

export default SignupEducateur