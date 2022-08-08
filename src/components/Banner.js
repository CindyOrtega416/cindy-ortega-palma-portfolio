import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg'
import 'animate.css';
import TrackVisibility from "react-on-screen";

export function Banner() {
    const [loopNum, setLoopNum] = useState(0) // loop number starts from he 0 word (for typing letters)
    const [isDeleting, setIsDeleting] = useState(false) // initially is false because we start by typing the words
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100) // using delta to determinate how fast the next letter comes after one is written
    const period = 2000

    useEffect(()=> {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker)}
        // eslint-disable-next-line
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if(isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else  if(isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }

    }

    const handleClick = () => {
        window.location.assign('https://mail.google.com/mail/u/0/?to=cindyortega416@gmail.com&su=Subject&body=Body&fs=1&tf=cm')
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{`Hi I'm Cindy`} <br/><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                                <p>My name is Cindy Ortega Palma and I'm a 25 years old Argentinean/Italian software engineering student currently working on my graduation project. I mainly focus on Front-End Development</p>
                                <p>"Where there's a will, there's a way"</p>
                                <button onClick={handleClick}>Let's connect <ArrowRightCircle size={25} /></button>
                            </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}