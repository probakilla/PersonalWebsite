import React from 'react';
import SiteNavbar from '../components/Navbar';
import ResumeHeader from './ResumeHeader';
import TechnicalSkills from './TechnicalSkills';
import '../css/page-header.css';
import '../css/home-buttons.css';

class Resume extends React.Component {
    render() {
        return (
            <div className='site-scroll'>
                <SiteNavbar />
                <ResumeHeader />
                <hr className='style-seven' id='skill-section' />
                <TechnicalSkills id='skill-section' />
            </div>
        );
    }
}

export default Resume;
