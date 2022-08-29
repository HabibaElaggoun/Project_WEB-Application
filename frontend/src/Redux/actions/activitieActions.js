
import axios from "axios"
import { ADD_ACTIVITIES_FAIL, ADD_ACTIVITIES_SUCCESS, DELETE_ACTIVITIES_FAIL, DELETE_ACTIVITIES_SUCCESS, GET_ACTIVITIES_FAIL, GET_ACTIVITIES_LOADING, GET_ACTIVITIES_SUCCESS, GET_ONE_ACTIVITIE_FAIL, GET_ONE_ACTIVITIE_SUCCESS, UPDATE_ONE_ACTIVITIES_FAIL, UPDATE_ONE_ACTIVITIES_SUCCESS } from "../constants/activitieTypes"

//get all
export const getAllActivities = ()=> async dispatch =>{
    dispatch({type: GET_ACTIVITIES_LOADING})
    try {
    const response = await axios.get('http://localhost:5000/activities/')
    dispatch ({type: GET_ACTIVITIES_SUCCESS, payload:response.data})
 
} catch (error) {
    console.log(error)
    dispatch({type:GET_ACTIVITIES_FAIL, payload:error})
}

}

//delete activitie
export const deleteActivitie = (id) => async dispatch =>{

    try {
    const response = await axios.delete(`http://localhost:5000/activities/${id}`)
    console.log(response)
    dispatch ({type: DELETE_ACTIVITIES_SUCCESS })
    dispatch(getAllActivities())
 
} catch (error) {
    console.log(error);
    dispatch({type:DELETE_ACTIVITIES_FAIL, payload:error})
}
}

//add activitie 
export const addActivities= (newActivitie, navigate)=>  async dispatch=>{
    console.log(newActivitie)
    const token=localStorage.getItem("token")
      try {
           const response=await axios.post("http://localhost:5000/activities/addactivitie", newActivitie,{ headers: { Authorization: `Bearer ${token}` } })
           console.log(response)
           dispatch({type:ADD_ACTIVITIES_SUCCESS})
           dispatch(getAllActivities())
           navigate("/activitielist")
          } catch (error) { 
              console.log(error);
              dispatch({type:ADD_ACTIVITIES_FAIL , payload:error})
              alert(error.response.data)
           }
  }

  //get one activitie details
  export const getOneActivitie=(id) => async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/activities/details/${id}`
      );
      dispatch({type:GET_ONE_ACTIVITIE_SUCCESS,payload:response.data.oneActivitie})
    } catch (error) {
      console.log(error);
      dispatch({type:GET_ONE_ACTIVITIE_FAIL,payload:error})
    }
  };


  //edit activitie
  export const editActivitie=(id, newActivitie, navigate) => async (dispatch) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/activities/${id}`,newActivitie
      );
      console.log(response)
      dispatch({type:UPDATE_ONE_ACTIVITIES_SUCCESS})
      dispatch(getAllActivities())
      navigate("/activitielist")
    } catch (error) {
      console.log(error);
      dispatch({type:UPDATE_ONE_ACTIVITIES_FAIL,payload:error})
    }
  };

