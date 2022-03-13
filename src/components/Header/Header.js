import React from "react";
import { LinkContainer } from 'react-router-bootstrap';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import bannerPic from '../../assets/images/Banner-Warehouse-Ceiling.jpeg'

import './Header.module.css'

const Header = () => {
    return (
        <div className="banner-image" style={{backgroundImage: `url(${bannerPic})`, height: '275px', width: '100%'}}>
            <div className="nav-wrapper pageTitle" style={{width: 'auto'}}>
                <header id="home">
                    <h1>Julie <span className="Chu" style={{color:'#55f0e3', marginLeft: '5px'}}>Chu</span></h1>
                    <nav role="navigation" aria-label="navigation menu">
                        <ul>
                            <li>
                                <LinkContainer to={`/`}>
                                    <Nav.Link><p>About</p></Nav.Link>
                                </LinkContainer>
                            </li>
                            <li>
                            <li>
                                <LinkContainer to={`/work`}>
                                    <Nav.Link><p>Work</p></Nav.Link>
                                </LinkContainer>
                            </li>
                            </li>
                            <li>
                            <LinkContainer to={`/contact`}>
                                    <Nav.Link><p>Contact</p></Nav.Link>
                                </LinkContainer>
                            </li>
                            <li>
                            <LinkContainer to={`/resume`}>
                                    <Nav.Link><p>Resume</p></Nav.Link>
                                </LinkContainer>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    );
}

export default Header