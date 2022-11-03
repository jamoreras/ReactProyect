import React from 'react'
import { useNavigate,} from 'react-router-dom';
//cambia el usuario que esta en local storage por un null
const Logout = () => {

    localStorage.setItem('userLoggedIn',null);
    useNavigate("/Login")
  return (
    <div>
 {/* <button onClick = {Logout}></button> */}
    
</div>
//Logout()
    );
    // localStorage.removeItem()
    // useNavigate("/login")
}

export default Logout;
