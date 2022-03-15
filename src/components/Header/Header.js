import React from "react";
import { HashRouter as Link } from "react-router-dom";
import bannerPic from '../../assets/images/Banner-Warehouse-Ceiling.jpeg'

import './Header.module.css'

const Header = () => {
    return (
        <div className="banner-image" style={{ backgroundImage: `url(${bannerPic})`, height: '275px', width: '100%' }}>
            <div className="nav-wrapper pageTitle" style={{ width: 'auto' }}>
                <header id="home">
                    <h1 style={{ marginTop: '10px' }}>Julie <span className="Chu" style={{ color: '#55f0e3', marginLeft: '5px' }}>Chu</span></h1>
                    <nav role="navigation" aria-label="navigation menu">
                        <ul>

                            <li>
                                <Link to="/"><p>About</p></Link>
                            </li>
                            <li>
                                <Link to="/work"><p>Work</p></Link>
                            </li>
                            <li>
                                <Link to="/contact"><p>Contact</p></Link>
                            </li>
                            <li>
                                <Link to="/resume"><p>Resume</p></Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    );
}

export default Header