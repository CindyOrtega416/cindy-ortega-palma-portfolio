import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import logo from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-icon.svg';
import navIcon3 from '../assets/img/telegram-icon.svg';

export function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/cindy-micaela-ortega-palma-6a249a171/"><img src={navIcon1} alt="" /></a>
                            <a href="https://github.com/CindyOrtega416"><img src={navIcon2} alt="" /></a>
                            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSGLPzGMHkpQXmGGMrgjKthNSCcPjCwpBzDhqzLkvpgThcfNHKGDpdbQsHlqfKDlNWvHbSGf"><img src={navIcon3} alt="" /></a>
                        </div>
                        <p>CopyRight 2022. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}