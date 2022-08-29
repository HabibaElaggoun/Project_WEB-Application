import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerChildren } from '../../Redux/actions/userAction'
import './Rchildren.css'
import photo from "./Group_1612_2x.png";




const RegisterChildren = () => {
    const [firstName, setFisrtName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birth, setBirth] = useState("")
    const [image, setImage]= useState("")
	
    const navigate=useNavigate()
    const dispatch=useDispatch()
  return (
    <div>
    <div className="immgg">
          <img src={photo} alt=""/>
        </div>
        
<div className="container-contact100">
    <form className="contact100-form validate-form" >
      <span className="contact100-form-title">
        Informations sur l'enfant
      </span>
       <div className="wrap-input100 validate-input " data-validate="First name is required">
        <span className="label-input100 ">Prénom</span>
        <input className="input100" type="text" name="name" placeholder="Entrer votre Prénom de l'enfant" required onChange={(e)=>setFisrtName(e.target.value)} value={firstName} />
        <span className="focus-input100" />
      </div> 
      <div className="wrap-input100 validate-input " data-validate="Last name is required">
        <span className="label-input100">Nom</span>
        <input className="input100" type="text" name="name" placeholder="Entrez votre Nom de famille" required onChange={(e)=>setLastName(e.target.value)} value={lastName} />
        <span className="focus-input100" />
      </div>
      <div className="wrap-input100 validate-input" data-validate="Birth is required">
        <span className="label-input100">Date de naissance</span>
        <input className="input100" type="date" name="birthday" placeholder="Entrer votre date de naissance" required onChange={(e)=>setBirth(e.target.value)} value={birth} />
        <span className="focus-input100" />
      </div>
      
      <div className="wrap-input100 validate-input" data-validate="Valid photo is required: ex@abc.xyz">
        <span className="label-input100">Image</span>
        <input className="input100" type="file" name="avatar" placeholder="Entrer votre image de profil" required onChange={(e)=>setImage(e.target.value)} value={image}/>
        <span className="focus-input100" />
      </div>
     
      <div className="valid">
        
          <button  className="buttonsubmit" type="Sumbit" onClick={(e)=>{e.preventDefault();dispatch(registerChildren({firstName, lastName, birth, image}, navigate))}}>     
              Valider
          </button>
        
         </div>
    </form>
  </div>
</div>
  )
}

export default RegisterChildren