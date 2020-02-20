import React from "react";
import "./style.css";
import "./script";

class Typewriter extends React.Component {
    render() {
      return (
        <div>
            <div class="holder"></div>
            <h1>
                <span
                className="txt-rotate"
                data-period="2000"
                data-rotate='[ "Find me on the internet.", "Say hi.", "Check out my work.", "Drop me an email." ]'></span>
            </h1>
        </div>
       
      )
    }
};


export default Typewriter;