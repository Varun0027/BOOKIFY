import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../../Assets/Css/ls.css';
import email_icon from '../../Assets/images/email.png';
import user_icon from '../../Assets/images/person.png';
import pass_icon from '../../Assets/images/password.png';
import Navbar from '../Navbar';

const SignUp = () => {
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
            <div className="text">Sign Up</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <img src={user_icon} alt=" " />
              <input type="text" placeholder="Name" />
            </div>
            <div className="input">
              <img src={email_icon} alt=" " />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input">
              <img src={pass_icon} alt=" " />
              <input type="password" placeholder="Password" />
            </div>
            <div className="submit-container">
              <Stack spacing={2} direction="row">
                <Button type="submit" variant="contained">
                  Sign Up
                </Button>
              </Stack>
            </div>
          </div>
          <div className="login-link">
            Already have an account? <Link to="/login">Login here</Link>.
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
