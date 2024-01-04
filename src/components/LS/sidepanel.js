import React from 'react';
import { Link } from 'react-router-dom';

import '../../Assets/Css/sp.css';

const SidePanel = () => {
  return (
    <div className="side-panel">
      <button>
        <Link to="/User">USERS</Link>
      </button>
        <Link to="/Book">
      <button>
          BOOKS
      </button>
        </Link>
      <button>
        <Link to="/history">CART</Link>
      </button>
    </div>
  );
};

export default SidePanel;
