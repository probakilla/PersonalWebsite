import React from 'react';
import SiteNavbar from '../components/SiteNavbar';
import HomeButtons from './HomeButtons';

import '../css/Home.css';
import '../css/sizes.css';

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
                    <h1>Welcome</h1>
                    <HomeButtons />
                </div>
            </div>
        );
    }
}

export default Home;
