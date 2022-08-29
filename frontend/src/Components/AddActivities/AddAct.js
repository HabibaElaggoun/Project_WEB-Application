import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {addActivities} from "../../Redux/actions/activitieActions";
 import './add.css';
 
const AddAct = () => {
    const [name, setName] = useState("")
   
    const [image, setImage]= useState("")
	
    const navigate=useNavigate()
    const dispatch=useDispatch()
  return (
    <div>
        <div className="container">
    <form className="contact100-form validate-form" >
      <span className="contact100-form-title">
        Ajouter un activitie
      </span>
       <div className="wrap-input100 validate-input " data-validate="titre is required">
        <span className="label-input100 ">Titre</span>
        <input className="input100" type="text" name="name" placeholder="Entrer votre Prénom de l'enfant" required onChange={(e)=>setName(e.target.value)} value={name} />
        <span className="focus-input100" />
      </div> 
    
      <div className="wrap-input100 validate-input" data-validate="Valid photo is required: ex@abc.xyz">
        <span className="label-input100">Image</span>
        <input className="input100" type="file" name="avatar" placeholder="Entrer votre image de profil" required onChange={(e)=>setImage(e.target.value)} value={image}/>
        <span className="focus-input100" />
      </div>
     
      <div className="valid">
        
          <button  className="submit" type="Sumbit" onClick={(e)=>{e.preventDefault();dispatch(addActivities({name, image}, navigate))}}>     
              Valider
          </button>
        
         </div>
    </form>
  </div>
    </div>
  )
}

export default AddAct