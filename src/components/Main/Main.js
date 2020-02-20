import React from "react";
import "./style.css";
import IMG_5053 from "./IMG_5053.jpeg"

class Main extends React.Component {
    render() {
      return (
        <div>
            <p className="portfolio">MY PORTFOLIO AS A</p>
            <header>
                <h1>WEB</h1>
                <h1>DEVELOPER</h1>
                <div className="big-images">
                   <img src={IMG_5053}></img>
                </div>
            </header>
        </div>    
      )
    }
};


export default Main;