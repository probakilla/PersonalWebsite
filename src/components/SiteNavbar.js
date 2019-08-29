import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';

import '../css/navbar.css';

class SiteNavbar extends React.Component {
    render() {
        return (
            <Navbar fixed='top'>
                <Navbar.Brand className='mr-auto nav-elements' href='/'>
                    Home
                </Navbar.Brand>
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
                    <Nav.Link href='/resume'>Resume</Nav.Link>
                    <Nav.Link href='/contact'>Contact</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default SiteNavbar;
