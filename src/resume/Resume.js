import React from 'react';
import SiteNavbar from '../components/SiteNavbar';
import ResumeHeader from './ResumeHeader';
import TechnicalSkills from './TechnicalSkills';
import Studies from './Studies';
import Experience from './Experience';

import '../css/page-header.css';
import '../css/home-buttons.css';

class Resume extends React.Component {
    render() {
        return (
            <div>
                <SiteNavbar />
                <ResumeHeader />
                <hr className='style-seven' id='skill-section' />
                <TechnicalSkills />
                <hr className='style-seven' id='studies-section' />
                <Studies />
                <hr className='style-seven' id='experience-section' />
                <Experience />
            </div>
        );
    }
}

export default Resume;
