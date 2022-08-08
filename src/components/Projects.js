import React from "react";
import projImg1 from "../assets/img/memory-game.png";
import projImg2 from "../assets/img/profile-encontrarte.png";
import projImg3 from "../assets/img/dashboard-react-blog.png";
import projImg4 from "../assets/img/map-segurita.png";
import projImg5 from "../assets/img/ecommerce-dashboard.png";
import certificate1 from "../assets/img/EFSET-certificate.png"
import certificate2 from "../assets/img/React-Developer.png"
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"


export function Projects() {

    const projects = [
        {
            title: "Memory Card Game",
            description: "Attention & Fast Thinking Game",
            imgUrl: projImg1,
            url: "https://ucc-memorygame.herokuapp.com/",
        },
        {
            title: "Social Media App",
            description: "Like & Comment Images. Follow and Unfollow Users",
            imgUrl: projImg2,
            url: "https://github.com/CindyOrtega416/Encontrarte",
        },
        {
            title: "PetFinder",
            description: "Login And Post a Report. Read Other Posted Reports",
            imgUrl: projImg3,
            url: "https://github.com/CindyOrtega416/react-blog",
        },
        {
            title: "Municipal Report",
            description: "Report A Municipal Flaw on Your Neighbourhood Via Whatsapp",
            imgUrl: projImg4,
            url: "https://github.com/CindyOrtega416/Asegurita",
        },
        {
            title: "Ecommerce Startup",
            description: "Upload Products Up For Sale",
            imgUrl: projImg5,
        },

    ]

    const certificates = [
        {
            title: "EF SET English Certificate 82/100 (C2 Proficient)",
            description: "EF Standard English Test (EF SET) ",
            imgUrl: certificate1,
            url: "https://www.efset.org/cert/McV9LM",
        },
        {
            title: "React JS Developer",
            description: "Credential ID: CER-K45WEBGY-749743",
            imgUrl: certificate2,
            url: "https://sigead.utnba.centrodeelearning.com/alumnos/validar_certificado"
        }
    ]
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>As a software engineering student I've had the opportunity to work on many academic projects targeted to different subjects, as well as personal projects for learning purposes. Here you can take a look to some of them</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Certifications</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Others</Nav.Link>
                            </Nav.Item>
                        </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            certificates.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third"></Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img alt="" className="background-image-right" src={colorSharp2} />
        </section>
    )
}