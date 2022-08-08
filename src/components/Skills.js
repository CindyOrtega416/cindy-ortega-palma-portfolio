import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import {Col, Container, Row} from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png"
import react from "../assets/img/react.png"
import firebase from "../assets/img/firebase-icon.svg"
import angular from "../assets/img/angular.svg"
import javascript from "../assets/img/javascript.svg"
import github from "../assets/img/github.png"

export function Skills() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                                <p>During my academic journey I have learned programming languages such as JavaScript, Python and C++.<br></br> Having specialized in Front-End Development I work with frameworks such as React JS and Angular; <br></br>Baas such as Firebase; And Relational Databases such as MySQL. <br></br> With this I have the ability to create a FullStack applications.</p>
                             <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={react} alt="React" />
                                    <h5>React JS</h5>
                                </div>
                                <div className="item">
                                    <img src={firebase} alt="Firebase" />
                                    <h5>Firebase</h5>
                                </div>
                                <div className="item">
                                    <img src={angular} alt="Angular" />
                                    <h5>Angular</h5>
                                </div>
                                <div className="item">
                                    <img src={javascript} alt="JavaScript" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={github} alt="Github" />
                                    <h5>Github</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img alt="" className="background-image-left" src={colorSharp} />
        </section>
    )
}