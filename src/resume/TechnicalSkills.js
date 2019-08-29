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
            <Container className='section-size'>
                <Row>
                    <Col sm='12' md='4' lg='4'>
                        <h1 className='section-header'>Languages</h1>
                        <ul>
                            <SkillProgress skill='C/C++' percent='80' />
                            <SkillProgress skill='Python' percent='70' />
                            <SkillProgress skill='NodeJs' percent='65' />
                            <SkillProgress skill='.NET (C#/VbNet)' percent='60' />
                            <SkillProgress skill='SQL' percent='60' />
                            <SkillProgress skill='Bash' percent='50' />
                            <SkillProgress skill='Java' percent='40' />
                        </ul>
                    </Col>
                    <Col sm='12' md='4' lg='4'>
                        <h1 className='section-header'>Frameworks</h1>
                        <ul>
                            <SkillProgress skill='React' percent='70' />
                            <SkillProgress skill='ASP NET MVC' percent='60' />
                            <SkillProgress skill='.NET Core' percent='60' />
                            <SkillProgress skill='Apache Hadoop' percent='40' />
                            <SkillProgress skill='QT' percent='30' />
                            <SkillProgress skill='JavaFX' percent='30' />
                        </ul>
                    </Col>
                    <Col sm='12' md='4' lg='4'>
                        <h1 className='section-header'>Other skills</h1>
                        <ul>
                            <SkillProgress skill='Design Patterns' percent='90' />
                            <SkillProgress skill='Linux' percent='80' />
                            <SkillProgress skill='Agile Development' percent='70' />
                            <SkillProgress skill='Windows' percent='50' />
                            <SkillProgress skill='NoSql (MongoDB)' percent='50' />
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TechnicalSkills;
