import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NetworkIcon from '../components/NetworkIcon';
import { Link } from 'react-router-dom';

import '../css/sizes.css';
import '../css/studies.css';
import '../css/headings.css';
import '../css/contacts.css';

const ImgPath = process.env.PUBLIC_URL + 'imgs/';

class ContactHeader extends React.Component {
    constructor(props) {
        super(props);
        this.linkedinIcon = ImgPath + 'linkedin.png';
        this.gitIcon = ImgPath + 'git.png';
    }

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
                                    src={this.gitIcon}
                                    alt='Github'
                                />
                                <NetworkIcon
                                    src={this.linkedinIcon}
                                    href='https://www.linkedin.com/in/julien-pilleux-778134161'
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
                                <Link className='btn btn-link site-btn' to='/resume'>
                                    My Resume
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ContactHeader;
