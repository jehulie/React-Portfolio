import './Work.module.css'

const Work = () => {
    return (
      <section id="work">
     <div className="work-wrapper">
                <div className='row'>
                    <h2 id="work">Work</h2>
                    <figure className="Project-Box">
                        <a href="https://www.fieldguidetologistics.com/">
                            <img id="covid-image" src="./assets/images/1-Logistics-Covid.png"
                                alt="Image of logistics artifacts during Covid"/>
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
                                <img id="box-tetris" src="./assets/images/2-Box-Tetris.jpg"
                                    alt="Image of Amazon shipping boxes"/>
                            </a>
                            <h3 id="Project2">Un/boxing Fulfillment</h3>
                        </figure>
                    </div>

                    <div className="col-sm">
                        <figure className="Project-Box">
                            <a href="https://roadsides.net/call-for-papers/">
                                <img id="roadsides-icon" src="./assets/images/3-Roadsides-Icons.jpeg"
                                    alt="Image of logistics graphic icons"/>
                            </a>
                            <h3 id="Project3">Roadsides 007</h3>
                        </figure>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-sm">
                        <figure className="Project-Box">
                            <a href="https://curiositycabinet.herokuapp.com/">
                                <img id="arsenal-hinges" src="./assets/images/curiosityCab.png"
                                    alt="Image of Curiosity Cabinet homepage"/>
                            </a>
                            <h3 id="Project4">Curiosity Cabinet</h3>
                        </figure>
                    </div>

                    <div className="col-sm">
                        <figure className="Project-Box">
                            <a href="https://zackeryarsement.github.io/projectOne/">
                                <img id="prairie-cranes" src="./assets/images/daytrip1-resized.jpeg"
                                    alt="Image of shipping cranes amid prairie land"/>
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