import React from 'react';
import ReactDOM from 'react-dom';
import SiteNavbar from '../components/Navbar';

describe('Navbar tests', () => {
    it('Render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SiteNavbar />, div);
    });
});
