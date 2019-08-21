import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../css/navbar.css';

class SiteNavbar extends React.Component {
    render() {
        return (
            <Navbar fixed='top'>
                <Navbar.Brand href='/'>Home</Navbar.Brand>
                <Nav className='ml-auto'>
                    <Nav.Link href='/about'>About</Nav.Link>
                    <Nav.Link href='/Resume'>Resume</Nav.Link>
                    <Nav.Link href='/contact'>Contact</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default SiteNavbar;
