import React, { useState , useEffect} from 'react';
import './SignIn.css';
import {useNavigate } from 'react-router-dom';

const SignIn = ({ handleSignIn, signedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn(username, password);
  };

  useEffect(()=> {
    if (signedIn){
      navigate('/');
    }

  },[signedIn]);

  return (
    <div className="Saloni"> 
      <div className='tittle-fix'><h1>BudgetBee</h1></div>

      <div className="signin-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
