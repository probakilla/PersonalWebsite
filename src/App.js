import React from 'react';
import SiteNavbar from './components/Navbar';
import HomeButtons from './components/HomeButtons';
import './css/App.css';

function App() {
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

export default App;
