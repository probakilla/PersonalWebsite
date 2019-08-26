import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../css/resume.css'

class TechnicalSkills extends React.Component {
    render() {
        return (
            <Container className="skill-section">
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <h1 className="section-header">Languages</h1>
                        <ul>
                            <li><a>C/C++</a></li>
                            <li><a>Python</a></li>
                            <li><a>JavaScript</a></li>
                            <li><a>C#</a></li>
                            <li><a>Java</a></li>
                        </ul>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <h1 className="section-header">Other</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TechnicalSkills;
