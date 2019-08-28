import React from 'react';
import ReactDOM from 'react-dom';
import SiteNavbar from '../components/Navbar';
import { render } from '@testing-library/react';

describe('Navbar tests', () => {
    it('Render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SiteNavbar />, div);
    });

    it('Testing home button rendering', () => {
        const { getByText } = render(<SiteNavbar />);
        expect(getByText('Home')).toBeInTheDocument();
    });

    it('Testing about rendering', () => {
        const { getByText } = render(<SiteNavbar />);
        expect(getByText('About')).toBeInTheDocument();
    });

    it('Testing resume button rendering', () => {
        const { getByText } = render(<SiteNavbar />);
        expect(getByText('Resume')).toBeInTheDocument();
    });

    it('Testing contact button rendering', () => {
        const { getByText } = render(<SiteNavbar />);
        expect(getByText('Contact')).toBeInTheDocument();
    });
});
