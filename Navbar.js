import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ handelSignOut }) => {  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="expensemanager">BudgetBee</h1>
      <ul className="navlinks">
        <li className="navitems">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="navitems">
          <Link to="/add-expense" className="nav-link">Add Expense</Link>
        </li>
        <li className="navitems">
          <Link to="/billing" className="nav-link">Total Bill</Link>
        </li>
        <li className="navitems">
          <Link to="/contact-us" className="nav-link">Contact Us</Link>
        </li>
        
      </ul>
      <div className="profile-logo" onClick={toggleDropdown}>
      <img
      
        src={require('../images/propic.jpg')}
        alt ='a'/>
        </div> 
        

  
      <div className="profile-container">
        {/* <div className="profile-logo" onClick={toggleDropdown}></div> 
        <img
        src='expense-manager/src/propic.jpg'
        alt ='S'/> */}
        
        

     
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <button className="signout-button" onClick={handelSignOut}>
              Sign Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
