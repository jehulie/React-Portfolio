import React from 'react';
import './Footer.module.css'

const Footer = () => {
    return (
      <footer>
            <h4 id="contact">Contact</h4>
            <section className="contact-info">
                <ul>
                    <li>
                    <a href="https://anthropology.uchicago.edu/people/faculty/julie-chu" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-chalkboard-user" alt="chalkboard icon"></i> </a>
                    </li>
                    <li>
                    <a href="https://github.com/jehulie" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github" alt="github icon"></i> </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/covidxlogistics/" target="_blank" rel="noopener noreferrer">
                        <i class="fa-solid fa-file-arrow-down" alt="file icon"></i> </a>
                    </li>
                </ul>
            </section>
    </footer>
    );
  }

 export default Footer 