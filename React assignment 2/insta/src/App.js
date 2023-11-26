import { useState } from 'react';
import './App.css';

function App() {

  const [login,setlogin]=useState(false);

  const loginSwicth=()=>{
    setlogin(!login);
  }

  return (
    
      <div className='app'>
        <div className='user'>
          <img src='https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png' alt='logo' height={'200px'} width={'300px'}/>
          <input hidden={login}   type='text'  placeholder='Mobile Number or Email'  id=''/>
          <input hidden={login}   type='text'  placeholder='Full Name'  id=''/>
          <input   type='text'  placeholder='Phone number,username or email'  id=''/>
          <input   type='text'  placeholder='Password'  id=''/>
          <button>{login?'Sign in':'Sign up'}</button>
         <div id='footer'>
          {login?"Don't have account?":"have an account?"}<span onClick={loginSwicth}>{login?"Sign up":"Log in"}</span>
         </div>

        </div>
      </div>
  );
}

export default App;
