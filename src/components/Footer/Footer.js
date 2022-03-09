import React from 'react';
import './Footer.module.css'

const Footer = () => {
    return (
      <footer>
            <h4 id="contact">Contact</h4>
            <section className="contact-info">
                <ul>
                    <li>
                    <a href="https://anthropology.uchicago.edu/people/faculty/julie-chu" target="_blank"/>
                    <FontAwesomeIcon icon="fa-solid fa-chalkboard" />
                    </li>
                    <li>
                    <a href="https://github.com/jehulie" target="_blank"/>
                    <FontAwesomeIcon icon="fa-brands fa-github" />
                    </li>
                    <li>
                        <a href="https://www.instagram.com/covidxlogistics/" target="_blank"/>
                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                    </li>
                </ul>
            </section>
    </footer>
    );
  }

 export default Footer 