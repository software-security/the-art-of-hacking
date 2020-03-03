import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className = "header">

            {/* Page Links */}
            <div className = "nav-items">
                <Link className = "nav-link" to='/Home'>Login</Link>
                <Link className = "nav-link" to='/Register'>Register</Link>
            </div>

        </div>
    )
};

export default NavBar;