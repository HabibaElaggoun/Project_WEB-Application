import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import Details from './Components/Details/Details';
//import {getAllActivities} from './Redux/actions/activitieActions';
import AddActivities from './Components/AddActivities/AddActivities';
import EditActivitie from './Components/EditActivitie/EditActivitie';
import ActivitieList from './Components/ActivitieList/ActivitieList';
import PageHome from './Components/Home(acceuil)/PageHome';
import Parents from './Components/Parents/Parents';
import SignupParents from './Components/SignupParents/SignupParents';
import SigninParents from './Components/SigninParents/SigninParents';
import AcceuilParent from './Components/AcceuilParent/AcceuilParent';
import Educateurs from './Components/Educateurs/Educateurs';
import SignupEducateur from './Components/SignupEducateur/SignupEducateur';
import SigninEducateur from './Components/SigninEducateur/SigninEducateur';
import { getCurrentuser } from './Redux/actions/userAction';
import RegisterChildren from './Components/RegisterChildren/RegisterChildren';
import NavBar from './Components/NavBar/NavBar';




function App() {
 const dispatch = useDispatch(
  useEffect(() => {
     dispatch(getCurrentuser())
  })
 )

  return (
    <div className="App">
      <NavBar/>
<Routes> 
 
    <Route path='/' element ={<PageHome/>}/>
    <Route path='/activitielist' element={<ActivitieList/>} />
    <Route path='/addactivitie' element={<AddActivities/>} />
    <Route path='/editactivitie/:id' element={<EditActivitie/>} />
    <Route path='/details/:id' element={<Details/>} />
    <Route path='/parents' element={<Parents/>} />
    <Route path='/signupParent' element={<SignupParents/>} />
    <Route path='/signinParent' element={<SigninParents />}/>
    <Route path='/acceuilparent' element={ <AcceuilParent/>}/>
    <Route path='/registerChildren' element={ <RegisterChildren/>} />
    <Route path='/educateurs' element={<Educateurs/>} />
    <Route path='/signupEducateur' element={<SignupEducateur/>} />
    <Route path='/signinEducateur' element={<SigninEducateur />}/>

</Routes> 
    </div>
  );
}

export default App;
