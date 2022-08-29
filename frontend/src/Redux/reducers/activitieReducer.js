import { DELETE_ACTIVITIES_FAIL, GET_ACTIVITIES_FAIL, GET_ACTIVITIES_LOADING, GET_ACTIVITIES_SUCCESS, GET_ONE_ACTIVITIE_SUCCESS } from "../constants/activitieTypes";

const initialState={
loading: false,
activities:[],
errors:null,
oneActivitie:{}
}


export const activitieReducer = (state = initialState, {type, payload})=> 
{
switch (type) {
    case GET_ACTIVITIES_LOADING: return {...state, loading:true}
    case GET_ACTIVITIES_SUCCESS: return {...state, activities:payload, loading:false} 
    case GET_ACTIVITIES_FAIL: return {...state, errors:payload, loading:false}   

//delete activities
   // case DELETE_ACTIVITIES_SUCCESS: return {...state, activities:state.activities.filter()} 
    case DELETE_ACTIVITIES_FAIL: return {...state, errors:payload}   
    case GET_ONE_ACTIVITIE_SUCCESS:return {...state,oneActivitie:payload}
    default: return state;
        
}
}