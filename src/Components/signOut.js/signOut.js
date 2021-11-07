import React from 'react';


const signOut = props => {
  if (localStorage.getItem('userTokenTime')) {
    localStorage.removeItem('userTokenTime');
  }
  return window.location.replace('/');
}

export default signOut;