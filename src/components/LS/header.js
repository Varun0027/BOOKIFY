import React from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/Css/header.css' 
import HomeIcon from '@mui/icons-material/Home';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="st">
          <h1>BOOKIFY</h1>
        </div>
      <Link to="/home">
          <HomeIcon />
      </Link>
        <Link to="/product">
          <ImportContactsIcon/>
        </Link>
        <Link to="/user">
          <PeopleOutlineIcon/>
        </Link>
        <Link to="/login">
          <LogoutIcon/>
        </Link>
        
       
      </nav>
    </header>
  );
};

export default Header;