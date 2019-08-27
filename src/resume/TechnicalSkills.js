import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SkillProgress from './SkillProgress';

import '../css/resume.css';
import '../css/sizes.css';
import '../css/page-header.css';

class TechnicalSkills extends React.Component {
    render() {
        return (
            <Container className='section-size site-scroll'>
                <Row>
                    <Col sm='12' md='4' lg='4'>
                        <h1 className='section-header'>Languages</h1>
                        <ul>
                            <SkillProgress language='C/C++' percent='80' />
                            <SkillProgress language='Python' percent='70' />
                            <SkillProgress language='NodeJs' percent='65' />
                            <SkillProgress language='.NET' percent='60' />
                            <SkillProgress language='Bash' percent='50' />
                            <SkillProgress language='Java' percent='40' />
                        </ul>
                    </Col>
                    <Col sm='12' md='4' lg='4'>
                        <h1 className='section-header'>Framworks</h1>
                        <ul>
                            <SkillProgress language='React' percent='70' />
                            <SkillProgress language='ASP NET MVC' percent='60' />
                            <SkillProgress language='.NET Core' percent='60' />
                            <SkillProgress language='QT' percent='30' />
                            <SkillProgress language='JavaFX' percent='30' />
                        </ul>
                    </Col>
                    <Col sm='12' md='4' lg='4'>
                        <h1 className='section-header'>Programs & OS</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TechnicalSkills;
