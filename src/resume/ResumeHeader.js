import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import icons from 'glyphicons';

import '../css/horizontal-bar.css';
import '../css/button.css';
import '../css/sizes.css';

const CvPath = process.env.PUBLIC_URL + '/cv.pdf';

class ResumeHeader extends React.Component {
    scrollToSkills() {
        document.querySelector('#skill-section').scrollIntoView();
    }

    scrollToStudies() {
        document.querySelector('#studies-section').scrollIntoView();
    }

    scrollToExperience() {
        document.querySelector('#experience-section').scrollIntoView();
    }

    render() {
        return (
            <Container className='section-style'>
                <p className='header-text wow slideInLeft'>
                    Learn more <br />
                    about my skills
                </p>
                <Button variant='link' className='site-btn' href={CvPath}>
                   {icons.arrowDoubleR}  Download resume {icons.arrowDoubleL}
                </Button>
                <Button variant='link' className='site-btn' onClick={this.scrollToSkills}>
                {icons.arrowD} Skills {icons.arrowD}
                </Button>
                <Button variant='link' className='site-btn' onClick={this.scrollToStudies}>
                {icons.arrowD} Studies {icons.arrowD}
                </Button>
                <Button variant='link' className='site-btn' onClick={this.scrollToExperience}>
                {icons.arrowD} Experience {icons.arrowD}
                </Button>
            </Container>
        );
    }
}

export default ResumeHeader;
