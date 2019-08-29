import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NetworkIcon from '../components/NetworkIcon';

import '../css/sizes.css';
import '../css/studies.css';
import '../css/headings.css';
import '../css/contacts.css';

class ContactHeader extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm='12' md='6' lg='6'>
                        <p className='wow slideInLeft header-text'>Want to contact me ?</p>
                    </Col>
                    <Col className='contact-heading' sm='12' md='6' lg='6'>
                        <Row>
                            <h1 className='wow slideInRight'>Contact me through social networks</h1>
                        </Row>
                        <Row>
                            <Col className='wow fadeInUp icon-row' sm='12'>
                                <NetworkIcon
                                    href='https://github.com/probakilla'
                                    src='https://img.icons8.com/ios-filled/2x/git.png'
                                    alt='Github'
                                />
                                <NetworkIcon
                                    src='https://sguru.org/wp-content/uploads/2018/02/linkedin-png-linkedin-icon-1600-300x300.png'
                                    href='www.linkedin.com/in/julien-pilleux-778134161'
                                    alt='linkdin'
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h1 className='wow slideInRight'>Or check out my resume !</h1>
                            </Col>
                        </Row>
                        <Row className='wow fadeInUp'>
                            <Col>
                                <Button variant='link' className='site-btn' href='/resume'>
                                    My Resume
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ContactHeader;
