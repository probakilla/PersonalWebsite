import React from 'react';
import ReactDOM from 'react-dom';
import SiteNavbar from '../components/Navbar';
import { render } from '@testing-library/react';
import { get } from 'https';

describe('Navbar tests', () => {
    it('Render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SiteNavbar />, div);
    });

    it('Testing URL', () => {
        const url = window.location.href;
        expect(url.indexOf('localhost') > -1).toBe(true);
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

    it('Click home button', () => {
        const { getByText } = render(<SiteNavbar />);
        expect(getByText('Home')).toHaveAttribute('href', '/');
    });

    it('Click about button', () => {
        const { getByText } = render(<SiteNavbar />);
        expect(getByText('About')).toHaveAttribute('href', '/about');
    });

    it('Click contact button', () => {
        const { getByText } = render(<SiteNavbar />);
        expect(getByText('Contact')).toHaveAttribute('href', '/contact');
    });

    it('Click resume button', () => {
        const { getByText } = render(<SiteNavbar />);
        expect(getByText('Resume')).toHaveAttribute('href', '/resume');
    })
});
