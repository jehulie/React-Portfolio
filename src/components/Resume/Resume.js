import React from "react";
import './Resume.module.css'

const Resume = () => {
    return (
      <section id="resume">
              <h2 data-testid='h1tag' className="top-title">Resume</h2>
      <hr></hr>
      <a href='https://drive.google.com/file/d/12sMoHs1Y7hP33GC-tWmo7VLz82YVgr_q/view?usp=sharing' target="_blank" rel="noopener noreferrer">
      <i class="fas fa-solid fa-file fa-10x" style={{color: "#d8f136", margin: "40px"}}></i>
              <h3>Click HERE for more information.</h3>
              </a>
        </section>
        );
  }

  export default Resume