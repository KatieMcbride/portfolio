import React from "react";


class OverlayContent extends React.Component {
    render() {
      return (
        <div className="overlay-content">
          <a className="closebtn" onClick={this.props.closeOverlay}>&times;</a>
          <h1 className="aboutMe">About Me</h1>
          <p className="aboutMeI">Creative Web Developer with a natural aptitude for programming, design, and computational thinking. Graduate from Northwestern University’s full-stack Web Development Bootcamp. Worked with front end UX design as well as back end development and database storage.</p>
          
        </div>
      )
    }
}

export default OverlayContent;