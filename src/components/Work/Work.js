import React from "react";
import './Work.module.css';
import fieldGuidePic from '../../assets/images/1-Logistics-Covid.png';
import unBoxingPic from '../../assets/images/2-Box-Tetris.jpg';
import roadsidesPic from '../../assets/images/3-Roadsides-Icons.jpeg';
import curiosityCabPic from '../../assets/images/curiosityCab.png'
import letsGetOutPic from '../../assets/images/daytrip1-resized.jpeg'


const Work = () => {
    return (
      <section id="work">
     <div className="work-wrapper">
                <div className='row'>
                    <h2 id="work">Work</h2>
                    <figure className="Project-Box">
                        <a href="https://www.fieldguidetologistics.com/">
                            <img id="covid-image" src= {fieldGuidePic}
                                alt="Logistics artifacts during Covid"/>
                        </a>
                        <h3 id="Project1">#Logistics in the Time of Covid</h3>
                    </figure>
                </div>
            </div>

            <div className="double-column">
                <div className='row'>
                    <div className="col-sm">
                        <figure className="Project-Box">
                            <a
                                href="https://allegralaboratory.net/un-boxing-fulfillment-a-field-guide-to-logistical-worlds/">
                                <img id="box-tetris" src={unBoxingPic}
                                    alt="Amazon shipping boxes"/>
                            </a>
                            <h3 id="Project2">Un/boxing Fulfillment</h3>
                        </figure>
                    </div>

                    <div className="col-sm">
                        <figure className="Project-Box">
                            <a href="https://roadsides.net/call-for-papers/">
                                <img id="roadsides-icon" src={roadsidesPic}
                                    alt="logistics graphic icons"/>
                            </a>
                            <h3 id="Project3">Roadsides 007</h3>
                        </figure>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-sm">
                        <figure className="Project-Box">
                            <a href="https://curiositycabinet.herokuapp.com/">
                                <img id="arsenal-hinges" src={curiosityCabPic}
                                    alt="Curiosity Cabinet homepage"/>
                            </a>
                            <h3 id="Project4">Curiosity Cabinet</h3>
                        </figure>
                    </div>

                    <div className="col-sm">
                        <figure className="Project-Box">
                            <a href="https://zackeryarsement.github.io/projectOne/">
                                <img id="prairie-cranes" src={letsGetOutPic}
                                    alt="shipping cranes amid prairie land"/>
                            </a>
                            <h3 id="Project5">Let's Get Outta Here!</h3>
                        </figure>
                    </div>
                </div>
            </div>
  </section>
        );
  }

  export default Work