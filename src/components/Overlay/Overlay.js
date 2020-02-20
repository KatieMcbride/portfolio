import React from "react";
import Portal from "../Portal/Portal"
import OverlayContent from "../OverlayContent/OverlayContent"

class Overlay extends React.Component {
    constructor(props) {
      super(props)
      this.state = { overlay: false }
      this.openOverlay = this.openOverlay.bind(this)
      this.closeOverlay = this.closeOverlay.bind(this)
    }
    
    openOverlay() {
      this.setState({ overlay: true })   
    }
    
    closeOverlay() {
      this.setState({ overlay: false })
    }
    
    render() {
      return (
        <div>
          <button className="btn btn-primary btn-wide" onClick={this.openOverlay}>Click Me</button>
          {this.state.overlay &&
            <Portal>
              <OverlayContent closeOverlay={this.closeOverlay} />
            </Portal>
          }
        </div>
      )
    }
}


  export default Overlay;