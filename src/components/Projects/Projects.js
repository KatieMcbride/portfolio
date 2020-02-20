import React from "react";
import "./style.css";
import Slides from "../Slides/Slides"
import cardData from "../../util/card.json"

class Projects extends React.Component {
    render = () => {
      return (
        <section className="projects">
            <h2>Recent Projects</h2>
            <Slides />
        </section>    
      )
    }
};


export default Projects;