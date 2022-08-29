import React from 'react'
import {FaHome} from "react-icons/fa";
import { MdOutlineCastForEducation } from 'react-icons/md';
import {RiParentLine} from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../Redux/actions/userAction';
import "./navbar.css"

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="topnav" id="myTopnav">
  <a href="/" className="active"> <FaHome style={{color:"white", fontSize:"17px"}}/>  Accueil</a>
  <a href="/activitielist">Activities</a>
  <a href="/parents">Parent</a>
  <a href="/educateurs">Educateur</a>
  {!localStorage.getItem("token")? (<div className="dropdown">
    <button className="dropbtn">Connexion 
      <i className="fa fa-caret-down" />
    </button>
    <div className="dropdown-content">
      <a href="/signinParent"><RiParentLine/> Parent</a>
      <a href="/signinEducateur"><MdOutlineCastForEducation/> Educateur</a>
    </div>
  </div>) :
 <button style={{width:"120px"}} onClick={() =>dispatch(logoutUser(navigate))}>Déconnecter</button>}
</div> 

  )
}

export default NavBar