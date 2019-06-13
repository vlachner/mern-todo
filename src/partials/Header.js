import React, { Component } from 'react'
import {Navbar , Nav} from 'react-bootstrap';
import logo from '../logo.png'
import {Link} from 'react-router-dom' ;

export class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand>
                    <Link to='/' className='navbar-brand'>
                        <img src={logo} height='50' alt='Logo'/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to='/' className='nav-link'>Home</Link>
                    <Link to='/create' className='nav-link'>Create To Do</Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header
