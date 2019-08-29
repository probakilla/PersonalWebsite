import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

import '../css/navbar.css';

class SiteNavbar extends React.Component {
    render() {
        return (
            <Navbar fixed='top'>
                <Link className='navbar-brand' to='/'>
                    Home
                </Link>
                <Nav className='ml-auto nav-element'>
                    <Dropdown>
                        <Dropdown.Toggle className='dropdown' variant='link'>
                            Projects
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='dropdown-menu'>
                            <Dropdown.Item
                                className='dropwdown-item'
                                href='https://probakilla.github.io/HeroesAndCreaturesOnline'
                            >
                                Heroes And Creatures Online
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Link className='nav-link' to='/resume'>
                        Resume
                    </Link>
                    <Link className='nav-link' to='/contact'>
                        Contact
                    </Link>
                </Nav>
            </Navbar>
        );
    }
}

export default SiteNavbar;
