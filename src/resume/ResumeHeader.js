import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import icons from 'glyphicons'

import '../css/horizontal-bar.css'
import '../css/button.css'

const CvPath = process.env.PUBLIC_URL + '/cv.pdf';

class ResumeHeader extends React.Component {
    render() {
        return (
            <Container>
                <p className='header-text'>
                    Learn more <br />
                    about my skills
                </p>
                <Button variant='link' className='site-btn' href={CvPath}>
                    Download resume {icons.arrowDoubleR}
                </Button>
            </Container>
        );
    }
}

export default ResumeHeader;