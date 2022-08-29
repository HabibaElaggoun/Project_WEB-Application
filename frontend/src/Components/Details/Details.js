//import axios from 'axios'
import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getOneActivitie } from '../../Redux/actions/activitieActions';

const Details = () => {
  const {id} =  useParams();
  const dispatch= useDispatch();
  //const [activities, setActivities] = useState([])
  /* const getOneActivitie = async() => {
    try {
      const response = await axios.get(`http://localhost:5000/activities/details/${id}`);
      console.log(response)

    } catch (error) {
      console.log(error);
    }
  }*/
  useEffect(() => {
     dispatch(getOneActivitie(id));
    
  }, [] );
  const oneActivitie= useSelector(state=>state.activitieReducer.oneActivitie)
  return <div> <h1>{oneActivitie.name}</h1>
  </div>
}
export default Details