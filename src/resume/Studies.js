import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FadedLI from './FadedLI';
import NetworkIcon from '../components/NetworkIcon';

import '../css/studies.css';
import '../css/load-animation.css';
import '../css/sizes.css';
import '../css/headings.css';

const ImgPath = process.env.PUBLIC_URL + 'imgs/';

class Studies extends React.Component {
    constructor(props) {
        super(props);
        this.gitIcon = ImgPath + 'git.png';
    }
    render() {
        return (
            <Container className=''>
                <Row className='studies-row'>
                    <Col sm='12' md='12' lg='12'>
                        <h1 className='study-title wow fadeInDown'>Master Degree Software Engineer</h1>
                        <h2 className=' wow fadeInDown'>2017 - 2019</h2>
                        <p className='study-description wow fadeInDown'>Universitée de Bordeaux, France.</p>
                    </Col>
                </Row>
                <Row className='studies-row'>
                    <Col sm='12' md='12' lg='12'>
                        <h1 className='study-title wow fadeInDown'>Degree in Computer Science</h1>
                        <h2 className=' wow fadeInDown'>2014 - 2017</h2>
                        <p className='study-description wow fadeInDown'>Universitée de Bordeaux, France.</p>
                    </Col>
                </Row>
                <hr />
                <Row className='studies-row'>
                    <Col sm='12' md='12' lg='12'>
                        <h1 className='study-title'>Studies fields</h1>
                        <Row>
                            <Col sm='12' md='6' lg='3'>
                                <ul>
                                    <FadedLI>Network Thoery</FadedLI>
                                    <FadedLI>Logic Theory</FadedLI>
                                    <FadedLI>Robotic</FadedLI>
                                    <FadedLI>Formal Design</FadedLI>
                                    <FadedLI>Compilation</FadedLI>
                                </ul>
                            </Col>
                            <Col sm='12' md='6' lg='3'>
                                <ul>
                                    <FadedLI>Unix</FadedLI>
                                    <FadedLI>C Programming</FadedLI>
                                    <FadedLI>Python Programming</FadedLI>
                                    <FadedLI>Java Programming</FadedLI>
                                    <FadedLI>JavaScript Programming</FadedLI>
                                </ul>
                            </Col>
                            <Col sm='12' md='6' lg='3'>
                                <ul>
                                    <FadedLI>Object Theory</FadedLI>
                                    <FadedLI>Web Programming</FadedLI>
                                    <FadedLI>Advanced Algorithms</FadedLI>
                                    <FadedLI>Big Data</FadedLI>
                                    <FadedLI>Assembly</FadedLI>
                                </ul>
                            </Col>
                            <Col sm='12' md='6' lg='3'>
                                <ul>
                                    <FadedLI>Computer Architecture</FadedLI>
                                    <FadedLI>Software Architecture</FadedLI>
                                    <FadedLI>Complexity Thoery</FadedLI>
                                    <FadedLI>Machine Learning</FadedLI>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <hr />
                <Container>
                    <Row className='studies-row'>
                        <Col sm='12'>
                            <h2>You can find all my school projects (and more) at my github account</h2>
                            <NetworkIcon
                                href='https://github.com/probakilla?tab=repositories'
                                src={this.gitIcon}
                                alt='Github repos'
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default Studies;
