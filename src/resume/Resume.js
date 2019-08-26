import React from 'react';
import SiteNavbar from '../components/Navbar';
import ResumeHeader from './ResumeHeader';
import TechnicalSkills from './TechnicalSkills';
import '../css/page-header.css'
import '../css/home-buttons.css'

class Resume extends React.Component {
    render() {
        return (
            <div>
                <SiteNavbar />
                <ResumeHeader />
                <hr className="style-seven" />
                <TechnicalSkills />
            </div>
        );
    }
}

export default Resume;
