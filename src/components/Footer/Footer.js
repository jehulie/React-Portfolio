import React from 'react';
import './Footer.module.css'

const Footer = () => {
    return (
        <footer id="main-footer" style={{ height: '15%'}}>
            <div className="footer-content container">
                    <a href="https://github.com/jehulie" target="_blank">
                        <i className="fab fa-github fa-3x" style={{color: "black"}}></i>
                    </a>
                    <a href="https://www.linkedin.com/in/julieychu" target="_blank">
                        <i className="fab fa-linkedin fa-3x" alt="chalkboard icon fa-3x" style={{color: "black"}}></i>
                    </a>
                    <a href="https://www.instagram.com/covidxlogistics/" target="_blank">
                        <i className="fab fa-instagram fa-3x" style={{color: "black"}}></i>
                    </a>
            </div>
        </footer>
    );
}

export default Footer 