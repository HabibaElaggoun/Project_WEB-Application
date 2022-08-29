
import React from 'react';
import { GrEdit, GrTrash } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteActivitie } from '../../Redux/actions/activitieActions';
import './Activitie.css';


export default function Activitie({el}) {
  const currentUser=useSelector(state=>state.userReducer.currentUser)
  /*const deleteActivities = async(id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/activities/${id}`)
      getAllActivities()
   alert(response.data.msg);
    } catch (error) {
      console.log(error);
    }
  }*/
  const dispatch = useDispatch()
  return (
    
    <div className="main-container">
   
  <div className="cards" >
    <div className="card card-1">
    <Link to={`/details/${el._id}`}> <div class="card__title">{el.name}</div></Link>
      <div className="card__image" ><img src={el.image} alt={el.name}/></div>
     
      {currentUser.role==="admin"||currentUser.role==="educator"?<p class="card__apply">
        <button class="card__link" onClick={()=> dispatch(deleteActivitie(el._id))}> <GrTrash/></button>
       <Link to={`/editactivitie/${el._id}`}> <button className="card__link"> <GrEdit/></button></Link>
      </p> :null}
    </div>
  </div>
</div>
  );
}

