import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import '../../Assets/Css/ls.css';
import email_icon from '../../Assets/images/email.png';
import pass_icon from '../../Assets/images/password.png';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div>
      <Navbar />
      <div className="containers">
        <form onSubmit={handleSubmit}>
          <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <img src={email_icon} alt=" " />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input">
              <img src={pass_icon} alt=" " />
              <input type="password" placeholder="Password" />
            </div>
            <div className="forgot-password">
              Forgot Password? <span>Click Here</span>
            </div>
            <div className="submit-container">
              <Stack spacing={2} direction="row">
                <Button type="submit" variant="outlined">
                  Login
                </Button>
              </Stack>
            </div>
          </div>
        </form>
        <div className="signup-link">
          REGISTER ? <Link to="/sign">Click here</Link>.
        </div>
      </div>
    </div>
  );
};

export default Login;
