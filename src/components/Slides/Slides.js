import React from "react";
import "./style.css";
import FitBoard from "./FitBoard.png"


function Slides (props) {
      return (
        <section className="projects">
              <div className="slider">
                <div className="slide" id="slide-1"> 
                    <section className="cards-wrapper">
                        <div className="card-grid-space">
                            <div className="num">{props.id}</div>
                                <a className="card" href="https://fitboardathletic.herokuapp.com/" >
                                    <div>
                                      <img className="slide-img" src={props.image}></img>
                                      <h1>{props.name}</h1>
                                      <p>{props.info}</p>
                                      <div className="date">{props.date}</div>
                                      <div className="tags">
                                      <div className="tag">{props.tag}</div> 
                                      </div> 
                                    </div>
                                </a>
                        </div>
                    </section>
                    </div>
                </div>
        </section>    
      )
}



export default Slides;