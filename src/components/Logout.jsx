import React from 'react'
import Login from '../pages/Login';

const Logout = () => {

    localStorage.setItem('userLoggedIn',null);

  return (
      <>
      <Login/>
      </>
    );
}

export default Logout;