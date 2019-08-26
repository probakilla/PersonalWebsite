import React from 'react';
import Button from 'react-bootstrap/Button';
import '../css/home-buttons.css';

class HomeButtons extends React.Component {
    onClickFct = () => {
        alert('click');
    };

    render() {
        return (
            <div className='home-btn-div'>
                <Button variant='link' className='site-btn' href='/about'>
                    About Me
                </Button>
                <Button variant='link' className='site-btn' href='/resume'>
                    My Resume
                </Button>
            </div>
        );
    }
}

export default HomeButtons;
