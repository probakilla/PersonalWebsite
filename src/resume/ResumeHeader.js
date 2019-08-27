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

    render() {
        return (
            <Container className='section-size'>
                <p className='header-text'>
                    Learn more <br />
                    about my skills
                </p>
                <Button variant='link' className='site-btn' href={CvPath}>
                    Download resume {icons.arrowDoubleR}
                </Button>
                <Button variant='link' className='site-btn' onClick={this.scrollToSkills}>
                    Skills {icons.arrowD}{' '}
                </Button>
            </Container>
        );
    }
}

export default ResumeHeader;
