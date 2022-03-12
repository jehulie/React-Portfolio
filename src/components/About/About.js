import React from 'react';
import './About.module.css'

const About = () => {
   return (
      <section className="about-wrapper">
         <div className='row'>
            <h2 id="about">About</h2>
            <div className="col-sm-5" id="about-box">
               <figure className="about-box">
                  <div className="headshot">
                     <img id="headshot" src="../../assets/images/jchu.gif" alt="headshot of designer" />
                  </div>
               </figure>
            </div>
            <div className="col bio-box">
               <ul id="bio">
                  <li>Designs for Multimodal Fieldwork.</li>
                  <br/>
                     <li> Anthropology for the Web 2.0. </li>
                     <br/>
                        <li> Experiments in Coding.</li>
                     </ul>
                  </div>
            </div>
      </section>
   )
}

export default About