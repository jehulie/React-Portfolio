import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from "react-bootstrap";
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import './Work.module.css';
import fieldGuidePic from '../../assets/images/1-Logistics-Covid.png';
import unBoxingPic from '../../assets/images/2-Box-Tetris.jpg';
import roadsidesPic from '../../assets/images/3-Roadsides-Icons.jpeg';
import curiosityCabPic from '../../assets/images/curiosityCab.png';
import letsGetOutPic from '../../assets/images/daytrip1-resized.jpeg';
import weatherPic from '../../assets/images/Weather-Dashboard.png';


const Work = () => {
    return (
        <div>

        <Container className="container" style={{justifyContent: "center"}}>
            <Row>
                <h2 id="about">Work</h2>
                <hr></hr>
            </Row>
            <Row>
                <Col>
                    <div className="card">
                        <img src={fieldGuidePic} className="card-img-top" alt="logistics artifacts during Covid" />
                        <div className="card-body">
                            <h5 className="card-title">#Logistics in the Time of Covid</h5>
                            <a href="https://www.fieldguidetologistics.com/" className="btn btn-primary">Application</a>
                        </div>
                    </div>
                </Col>
                <Col>
                <div className="card">
                        <img src={unBoxingPic} className="card-img-top" alt="Amazon shipping boxes" />
                        <div className="card-body">
                            <h5 className="card-title">Un/boxing Fulfillment</h5>
                            <a href="https://allegralaboratory.net/un-boxing-fulfillment-a-field-guide-to-logistical-worlds/" className="btn btn-primary">Application</a>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="card">
                        <img src={roadsidesPic} className="card-img-top" alt="logistics graphic icons" />
                        <div className="card-body">
                            <h5 className="card-title">Roadsides 007</h5>
                            <a href="https://roadsides.net/call-for-papers/" className="btn btn-primary">Application</a>
                        </div>
                    </div>
                </Col>
                <Col>
                <div className="card">
                        <img src={curiosityCabPic} className="card-img-top" alt="Curiosity cabinet homepage" />
                        <div className="card-body">
                            <h5 className="card-title">Curiosity Cabinet</h5>
                            <a href="https://curiositycabinet.herokuapp.com/" className="btn btn-primary">Application</a>
                            <a href="https://github.com/rkingjr/CuriosityCabinet" className="btn btn-primary">Github</a>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="card">
                        <img src={letsGetOutPic} className="card-img-top" alt="Car on the road" />
                        <div className="card-body">
                            <h5 className="card-title">Let's Get Outta Here!</h5>
                            <a href="https://zackeryarsement.github.io/projectOne/" className="btn btn-primary">Application</a>
                            <a href="https://github.com/ZackeryArsement/projectOne" className="btn btn-primary">Github</a>
                        </div>
                    </div>
                </Col>
                <Col>
                <div className="card">
                        <img src={weatherPic} className="card-img-top" alt="Weather Dashboard homepage" />
                        <div className="card-body">
                            <h5 className="card-title">Weather Dashboard</h5>
                            <a href="https://jehulie.github.io/Weather-Dashboard/" className="btn btn-primary">Application</a>
                            <a href="https://github.com/jehulie/Weather-Dashboard" className="btn btn-primary">Github</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
export default Work