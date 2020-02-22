import React from "react";
import "./style.css";
import FitBoard from "./FitBoard.png"
import Beer from "./Beer Hunter.jpg"
import Chicago from "./Chicago food guide.png"
import Work from "./Work Schedule.png"


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
                                      <h1>FitBoard</h1>
                                      <p>Compete against your friends with this social media style Fitness Tracker</p>
                                      <div className="date">Jan 2020</div>
                                      <div className="tags">
                                      <div className="tag">SQL</div> 
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
                                <a className="card" href="https://beerhunter.pub/" >
                                    <div>
                                      <img className="slide-img" src={Beer}></img>
                                      <h1>BeerHunter</h1>
                                      <p>Find a brewery, plan out your beer crawl, map it out.</p>
                                      <div className="date">Nov 2019</div>
                                      <div className="tags">
                                      <div className="tag">API</div> 
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
                                <a className="card" href="https://katiemcbride.github.io/work-day-scheduler/" >
                                    <div>
                                      <img className="slide-img" src={Work}></img>
                                      <h1>Work Scheduler</h1>
                                      <p>Plan your day by the hour and save your to-dos.</p>
                                      <div className="date">Oct 2019</div>
                                      <div className="tags">
                                      <div className="tag">Local Storage</div> 
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
                                <a className="card" href="https://katiemcbride.github.io/HW2/" >
                                    <div>
                                      <img className="slide-img" src={Chicago}></img>
                                      <h1>Chicago Food Guide</h1>
                                      <p>List of top Chicago Restaraunts</p>
                                      <div className="date">Sep 2019</div>
                                      <div className="tags">
                                      <div className="tag">Bootstrap</div> 
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