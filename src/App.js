
import './App.css';
import {Route, Routes,
  } from 'react-router-dom'
import Signin from './Components/Form/Signin/Signin'
import Signup from './Components/Form/Signup/Signup'
import Upload from './Components/Upload/Upload'
import Dashboard from './Components/Dashboard/Dashboard';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import SignOut from './Components/signOut.js/signOut';
import Homepage from './Components/Homepage/Homepage';
import Delhi from '../src/Components/Hospitaldata/Delhi'
import HospitalAddress from '../src/Components/Hospitaldata/hospitaladdress/hospitaladdress'
import PersonalDashboard from '../src/Components/PersonalDashboard/PersonalDashboard'
import Radium, { StyleRoot } from 'radium';
import './App.css'

function App() {
  return (
    
    <StyleRoot>
    <div className="App" style={{width:'100%'}}>
      <Routes>
     <Route exact path='/' element={<Homepage/>}/>
  <Route exact path='/bed'  element={<Delhi/>}/>
  
     <Route exact path='/dashboard'  element={<Dashboard/>} />
     <Route exact path='/personaldashboard'  element={<PersonalDashboard/>}/>
     <Route exact path='/video/:videoTitle'  element={<VideoPlayer/>}/>  
    <Route exact path='/signIn'  element={<Signin/>}  />
    <Route exact path='/signUp'  element={<Signup/>}  />
    <Route exact path='/upload'  element={<Upload/>}  />
    <Route exact path='/signOut'  element={<SignOut/>} />

    <Route exact path='/data/:id'  element={<HospitalAddress/>}  />
   </Routes>
    </div>
    </StyleRoot>
  );
}

export default Radium(App);
