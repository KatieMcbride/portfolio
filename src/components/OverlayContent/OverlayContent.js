import React from "react";
import WildLeaves from "./Wild Leaves Social Post.png"
import "./style.css"


class OverlayContent extends React.Component {
    render() {
      return (
        <div className="overlay-content">
          {/* <img className="wildLeaves"src={WildLeaves}></img> */}
          <a className="closebtn" onClick={this.props.closeOverlay}>&times;</a>
          <h1 className="aboutMe">About Me</h1>
          <p className="aboutMeI">Creative Web Developer with a natural aptitude for programming, design, and computational thinking. Graduate from Northwestern University’s full-stack Web Development Bootcamp. Passionate about creating beautiful websites. I enjoy challenges and thinking out of the box to find solutions. </p>
          
        </div>
      )
    }
}

export default OverlayContent;