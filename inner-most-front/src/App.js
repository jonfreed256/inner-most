import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { spring, AnimatedSwitch } from "react-router-transition";
import { Route, withRouter } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import { Gradient } from "react-gradient";
import { gradients } from "./gradients";

class App extends Component {
  // we need to map the `scale` prop we define below
  // to the transform style property
  mapStyles = styles => {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`
    };
  };

  // wrap the `spring` helper to use a bouncy config
  bounce = val => {
    return spring(val, {
      stiffness: 330,
      damping: 22
    });
  };

  render() {
    // child matches will...
    const bounceTransition = {
      // start in a transparent, upscaled state
      atEnter: {
        opacity: 0,
        scale: 1.2
      },
      // leave in a transparent, downscaled state
      atLeave: {
        opacity: this.bounce(0),
        scale: this.bounce(0.8)
      },
      // and rest at an opaque, normally-scaled state
      atActive: {
        opacity: this.bounce(1),
        scale: this.bounce(1)
      }
    };

    return (
      <Gradient
        gradients={gradients.disgust} // required
        property="background"
        duration={3000}
        angle="45deg"
      >
        <div id="gradient">
          <NavBar />
          <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={this.mapStyles}
            className="route-wrapper"
          >
            <Route exact path="/home" component={Home} />
            <Route exact path="/welcome" component={Welcome} />
          </AnimatedSwitch>
        </div>
      </Gradient>
    );
  }
}

export default withRouter(App);
