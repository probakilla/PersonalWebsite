import React from 'react';
import Button from 'react-bootstrap/Button';
import '../css/home-buttons.css'

class HomeButtons extends React.Component {
    onClickFct = () => {
        alert('click');
    }

    render() {
        return (
            <div className="home-btn-div">
                <Button variant="link" className="site-btn" onClick={this.onClickFct}>Button 1</Button>
                <Button variant="link" className="site-btn">Button 2</Button>
            </div>
        );
    }
}

export default HomeButtons;