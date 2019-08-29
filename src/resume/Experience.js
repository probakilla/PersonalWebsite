import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ExperienceEntry from './ExperienceEntry';

class Experience extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm='12' md='4' lg='3'>
                        <h2 className='wow slideInLeft'>Work Experience</h2>
                    </Col>
                    <Col className='vl' sm='12' md='8' lg='9'>
                        <ExperienceEntry post='Intern .NET Developer' title='Alltech, Bordeaux, France, 2019'>
                            During four months, I was a part of a development team of an internal software of Alltech
                            Consulting company. During this internship, I worked on how improve their web application,
                            functionally and its performances. The technologies used were essentially Microsoft .NET (C#)
                            and JavaScript.
                        </ExperienceEntry>
                        <hr />
                        <ExperienceEntry post='Intern Java Developer' title='LaBRI, Talence, France, 2016'>
                            During this internship of two months, my job was to make researches on a precise subject,
                            image anamorphosis. My goal was to understand how it works and then, create a Java
                            application which aim at to reproduce an image anamorphosis programmatically.
                        </ExperienceEntry>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Experience;
