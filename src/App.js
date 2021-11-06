// https://github.com/akshit8282/VideoServer-React.git
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
     <Route exact path='/' component={Homepage}/>
  <Route exact path='/bed' component={delhi}/>
  
     <Route exact path='/dashboard' component={Dashboard}/>
     <Route exact path='/personaldashboard' component={PersonalDashboard}/>
     <Route exact path='/video/:videoTitle' component={VideoPlayer}/>  
    <Route exact path='/signIn' component={signin}/>
    <Route exact path='/signUp' component={signup}/>
    <Route exact path='/upload' component={upload}/>
    <Route exact path='/signOut' component={signOut}/>
    <Route exact path='/data/:id' component={HospitalAddress}/>
    </div>
    </StyleRoot>
  );
}

export default Radium(App);
