
import './App.css';
import {Route} from 'react-router-dom'
import signin from './Components/Form/Signin/Signin'
import signup from './Components/Form/Signup/Signup'
import upload from './Components/Upload/Upload'
import Dashboard from './Components/Dashboard/Dashboard';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import signOut from './Components/signOut.js/signOut';
import Homepage from './Components/Homepage/Homepage';
import delhi from '../src/Components/Hospitaldata/Delhi'
import HospitalAddress from '../src/Components/Hospitaldata/hospitaladdress/hospitaladdress'
import PersonalDashboard from '../src/Components/PersonalDashboard/PersonalDashboard'
import Radium, { StyleRoot } from 'radium';
import './App.css'

function App() {
  return (
    <StyleRoot>
    <div className="App" style={{width:'100%'}}>
     <h1>hlo</h1>
    </div>
    </StyleRoot>
  );
}

export default Radium(App);
