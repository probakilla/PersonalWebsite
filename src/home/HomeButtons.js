import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import '../css/home-buttons.css';

class HomeButtons extends React.Component {
    render() {
        return (
            <div className='home-btn-div'>
                <Link className='btn btn-link site-btn' to='/contact'>
                    Contact Me
                </Link>
                <Link className='btn btn-link site-btn' to='/resume'>
                    My Resume
                </Link>
            </div>
        );
    }
}

export default HomeButtons;
