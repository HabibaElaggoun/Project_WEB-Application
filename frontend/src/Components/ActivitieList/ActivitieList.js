import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllActivities } from '../../Redux/actions/activitieActions'
import Activitie from '../Activitie/Activitie'
import { GrAdd } from "react-icons/gr";
import "./list.css";
import image from './GetToKnow-02_2x.png';


const ActivitieList = () => {
  const activities = useSelector(state=>state.activitieReducer.activities)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllActivities());
      
  },[] );
  return (
    <div className="activ">
      <div className="desc"><h2>Explorez les activités de garderie que votre classe adorera</h2></div>   
      <div className='cimg'>
          <img src={image} alt=""/>
        </div>
    <Link to='/addactivitie'><div className="adAc"><GrAdd/>
Ajouter Activitie</div></Link>
       <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:'wrap', padding:"70px"}}>  
        {activities.map(el => <Activitie el={el} key={el._id}/>)}
      </div>

    </div>
  )
}

export default ActivitieList