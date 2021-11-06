import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Header from '../header/header'
import './Navbar.css'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: localStorage.getItem('userTokenTime')
    }
  }

  render() {
    return (
      <React.Fragment>
     
      <nav className="navbar-dark fixed-top navbar-expand-lg nav bg-dark text-center text-white" >
        
        <div  className="navcss">
          <Link className="navbar-brand  heading" to="/" style={{fontFamily:'Lobster,cursive',fontSize:'1.9rem',letterSpacing:'0.5rem'}}>C<i className="fas fa-virus  fa-spin"></i>VA-INFO</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav  bg-dark text-center text-white">
              {this.state.loggedIn ?
                <React.Fragment>
                  <NavLink className="nav-item nav-link" to="/" exact>Home</NavLink>
                  <NavLink className="nav-item nav-link" to="/upload">Upload a video</NavLink>
                  <NavLink className="nav-item nav-link" to="/signOut">Sign Out</NavLink>
                  <NavLink className="nav-item nav-link" to="/dashboard">Dashboard</NavLink>
                  <NavLink className="nav-item nav-link" to="/personaldashboard">Your Dashboard</NavLink>
                </React.Fragment>
                :
                <React.Fragment>
                   <NavLink className="nav-item nav-link" to="/" exact>Home</NavLink>
                  <NavLink className="nav-item nav-link" to="/signIn">Sign In</NavLink>
                  <NavLink className="nav-item nav-link" to="/signUp">Sign Up</NavLink>
                  <NavLink className="nav-item nav-link" to="/dashboard">Dashboard</NavLink>
                 

                </React.Fragment>}
            </div>
          </div>
        </div>
        <div ></div>
      </nav>
      <div className="img">
      </div>
      </React.Fragment>
    );
  }
}

export default Navbar;