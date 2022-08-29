import {combineReducers} from "redux";
import {activitieReducer} from './activitieReducer';
import {userReducer} from './userReducer'

export const rootReducer = combineReducers({activitieReducer, userReducer});