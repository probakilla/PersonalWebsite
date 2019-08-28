import React from 'react';
import Button from 'react-bootstrap/Button';
import '../css/home-buttons.css';

class HomeButtons extends React.Component {
    render() {
        return (
            <div className='home-btn-div'>
                <Button variant='link' className='site-btn' href='/contact'>
                    Contact Me
                </Button>
                <Button variant='link' className='site-btn' href='/resume'>
                    My Resume
                </Button>
            </div>
        );
    }
}

export default HomeButtons;
