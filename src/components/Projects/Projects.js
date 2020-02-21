import React from "react";
import "./style.css";
import Slides from "../Slides/Slides"
import cardData from "../../util/card.json"

class Projects extends React.Component {
    render = () => {
      return (
        <section className="projects">
            <h2>Recent Projects</h2>
            {/* Loop through array of Projects then pass in project object into slide. For each loop */}
            {cardData.map(function(card, index){
                    return <Slides id={card.id} name={card.name} info={card.info} date={card.date} tag={card.tag} image={card.image}/>;
                  })}
           {cardData.id}
           
           
        </section>    
      )
    }
};


export default Projects;