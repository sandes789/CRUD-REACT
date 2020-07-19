import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import logo from '../img/logo.png'

const Navbar = () => {
    return (
        <div className='nav-bar'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                 <Link className="navbar-brand"to='/'>
                    <img src={logo} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto d-flex align-items-center">
                        <li className="nav-item">
                             <NavLink className="nav-link" to='/'>Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/user-details'>User Details</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            

        </div>
    )
}

export default Navbar
