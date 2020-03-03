import React from 'react';
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './Register.css';

function Register() {

    return (

        <div>
             <div id='signinContainer'>
                  <form id='form'>                
                      <input className='input' type="text"  
                       placeholder="Email"/>          
                      <input className='input' type="password" 
                       placeholder="Password"/>
                      <button id='submit'>Sign Up</button>
                  </form>
             </div>
        </div>
 
    );
}

export default Register;
