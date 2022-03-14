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
        <div style={{justifyContent: "center", marginLeft: 'auto', marginRight: 'auto'}}>

        <Container className="container" >
            <Row>
                <h2 id="about">Work</h2>
                <hr></hr>
            </Row>
            <Row>
                <Col>
                    <div className="card" style={{backgroundColor: "#94bbb6"}}>
                        <img src={fieldGuidePic} className="card-img-top" style={{width: '99%'}} alt="logistics artifacts during Covid" />
                        <div className="card-body">
                            <h5 className="card-title">#Logistics in the Time of Covid</h5>
                            <a href="https://www.fieldguidetologistics.com/" className="btn btn-warning">Website</a>
                        </div>
                    </div>
                </Col>
                <Col>
                <div className="card" style={{backgroundColor: "#94bbb6"}}>
                        <img src={unBoxingPic} className="card-img-top" style={{width: '99%'}} alt="Amazon shipping boxes" />
                        <div className="card-body">
                            <h5 className="card-title">Un/boxing Fulfillment</h5>
                            <a href="https://allegralaboratory.net/un-boxing-fulfillment-a-field-guide-to-logistical-worlds/" className="btn btn-warning">Website</a>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="card" style={{backgroundColor: "#94bbb6"}}>
                        <img src={roadsidesPic} className="card-img-top" style={{width: '99%'}} alt="logistics graphic icons" />
                        <div className="card-body">
                            <h5 className="card-title">Roadsides 007</h5>
                            <a href="https://roadsides.net/call-for-papers/" className="btn btn-warning">Website</a>
                        </div>
                    </div>
                </Col>
                <Col>
                <div className="card" style={{backgroundColor: "#94bbb6"}}>
                        <img src={curiosityCabPic} className="card-img-top" style={{width: '99%'}} alt="Curiosity cabinet homepage" />
                        <div className="card-body">
                            <h5 className="card-title">Curiosity Cabinet</h5>
                            <a href="https://curiositycabinet.herokuapp.com/" className="btn btn-warning">Website</a>
                            <a href="https://github.com/rkingjr/CuriosityCabinet" className="btn" style={{backgroundColor: '#32f3af'}}> <i className="fab fa-github fa-1.5x" style={{color: "black"}}></i></a>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="card" style={{backgroundColor: "#94bbb6"}}>
                        <img src={letsGetOutPic} className="card-img-top" style={{width: '99%'}} alt="Car on the road" />
                        <div className="card-body">
                            <h5 className="card-title">Let's Get Outta Here!</h5>
                            <a href="https://zackeryarsement.github.io/projectOne/" className="btn btn-warning">Website</a>
                            <a href="https://github.com/ZackeryArsement/projectOne" className="btn" style={{backgroundColor: '#32f3af'}}> <i className="fab fa-github fa-1.5x" style={{color: "black"}}></i></a>
                        </div>
                    </div>
                </Col>
                <Col>
                <div className="card" style={{backgroundColor: "#94bbb6"}}>
                        <img src={weatherPic} className="card-img-top" style={{width: '99%'}} alt="Weather Dashboard homepage" />
                        <div className="card-body">
                            <h5 className="card-title">Weather Dashboard</h5>
                            <a href="https://jehulie.github.io/Weather-Dashboard/" className="btn btn-warning">Website</a>
                            <a href="https://github.com/jehulie/Weather-Dashboard" className="btn" style={{backgroundColor: '#32f3af'}}><i className="fab fa-github fa-1.5x" style={{color: "black"}}></i></a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
export default Work