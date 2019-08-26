import React from 'react';
import SiteNavbar from '../components/Navbar';

const TmpTextStyle = {
    color: 'white',
    position: 'absolute',
    left: '50%',
    top: '50%',
    '-webkitTransform': 'translate(-50%,50%)',
    transform: 'translate(-50%,-50%)'
};

class Resume extends React.Component {
    render() {
        return (
            <div>
                <SiteNavbar />
                <h1 style={TmpTextStyle}>RESUME</h1>
            </div>
        );
    }
}

export default Resume;
