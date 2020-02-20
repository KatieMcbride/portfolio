import React from "react";


class OverlayContent extends React.Component {
    render() {
      return (
        <div className="container white">
          <h1>About Me</h1>
          <p>Creative Web Developer with a natural aptitude for programming, design, and computational thinking. Graduate from Northwestern University’s full-stack Web Development Bootcamp. Worked with front end UX design as well as back end development and database storage.</p>
          <button className="btn btn-default btn-wide palette-sun-flower" onClick={this.props.closeOverlay}>Close</button>
        </div>
      )
    }
}

export default OverlayContent;