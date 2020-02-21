import React from "react";
import "./style.css";
import Slides from "../Slides/Slides"
import cardData from "../../util/card.json"
import FitBoard from "./FitBoard.png"

class Projects extends React.Component {
    render = () => {
      return (
        <section className="projects">
            <h2>Recent Projects</h2>
            {/* Loop through array of Projects then pass in project object into slide. For each loop */}
            <div className="slides">
              <div className="slider">
                <div className="slide" id="slide-1"> 
                    <section className="cards-wrapper">
                        <div className="card-grid-space">
                            <div className="num">1</div>
                                <a className="card" href="https://fitboardathletic.herokuapp.com/" >
                                    <div>
                                      <img className="slide-img" src={FitBoard}></img>
                                      <h1>asf</h1>
                                      <p>r</p>
                                      <div className="date">1</div>
                                      <div className="tags">
                                      <div className="tag">1</div> 
                                      </div> 
                                    </div>
                                </a>
                        </div>
                    </section>
                </div>
              </div>

        
              <div className="slider">
                <div className="slide" id="slide-1"> 
                    <section className="cards-wrapper">
                        <div className="card-grid-space">
                            <div className="num">2</div>
                                <a className="card" href="https://fitboardathletic.herokuapp.com/" >
                                    <div>
                                      <img className="slide-img"></img>
                                      <h1>asf</h1>
                                      <p>r</p>
                                      <div className="date">1</div>
                                      <div className="tags">
                                      <div className="tag">1</div> 
                                      </div> 
                                    </div>
                                </a>
                        </div>
                    </section>
                </div>
              </div> 
         </div>

         <div className="slides">
              <div className="slider">
                <div className="slide" id="slide-1"> 
                    <section className="cards-wrapper">
                        <div className="card-grid-space">
                            <div className="num">3</div>
                                <a className="card" href="https://fitboardathletic.herokuapp.com/" >
                                    <div>
                                      <img className="slide-img"></img>
                                      <h1>asf</h1>
                                      <p>r</p>
                                      <div className="date">1</div>
                                      <div className="tags">
                                      <div className="tag">1</div> 
                                      </div> 
                                    </div>
                                </a>
                        </div>
                    </section>
                </div>
              </div>

        
              <div className="slider">
                <div className="slide" id="slide-1"> 
                    <section className="cards-wrapper">
                        <div className="card-grid-space">
                            <div className="num">4</div>
                                <a className="card" href="https://fitboardathletic.herokuapp.com/" >
                                    <div>
                                      <img className="slide-img"></img>
                                      <h1>asf</h1>
                                      <p>r</p>
                                      <div className="date">1</div>
                                      <div className="tags">
                                      <div className="tag">1</div> 
                                      </div> 
                                    </div>
                                </a>
                        </div>
                    </section>
                </div>
              </div> 
         </div>
      </section>    
      )
    }
};


export default Projects;