import React from 'react';
import SiteNavbar from '../components/Navbar';
import HomeButtons from './HomeButtons';
import '../css/Home.css';

class Home extends React.Component {
    render() {
        return (
            <div>
                <SiteNavbar />
                <div className='area'>
                    <ul className='circles'>
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                    </ul>
                </div>
                <div className='context'>
                    <h1>Developper</h1>
                    <HomeButtons />
                </div>
            </div>
        );
    }
}

export default Home;