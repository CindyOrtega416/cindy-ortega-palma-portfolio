import React from "react";
import {Col} from "react-bootstrap";

export function CertificateCard({ title, description, imgUrl, url }) {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <a href={url}>{title}</a>
                    <br></br>
                    <span>{description}</span>
                    <a href={url}></a>
                </div>
            </div>
        </Col>
    )
}