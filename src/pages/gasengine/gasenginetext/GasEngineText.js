import React from "react";
import "./GasEngineText.css";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
          <div className="greeting-text-div">
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {"Gas Engine"}
              </h1>
              <p
                className="greeting-text-p greeting-text-div subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"The gas engine project involved a collaboration of more than five people, all working towards a common goal: transitioning our plane from an electric engine to a gas engine. Our competition required us to fly the plane for approximately 10 miles, but due to the weight and energy density of the batteries, the electric engine couldn't cover the entire distance. Adding more batteries proved ineffective since their weight further reduced flight time. The team tirelessly researched how to install a gas engine and studied its effects on range and vibrations. Eventually, we successfully started and tuned the gas engine, and are planning to implement the engine on our future plane."}
              </p>
              <p className="image-side-side">
                <video controls
                    src={require(`../../../assests/images/gasenginepics/vibration.MOV`)}
                    alt="vibration causes stuff to fall in prop"
                    />
                <video controls
                    src={require(`../../../assests/images/gasenginepics/throttle.MOV`)}
                    alt="Throttle Test"
                    />
              </p>
              <p className="video">
                <iframe height="495" width="950" src="https://www.youtube.com/embed/oZwHqSrRL-E?si=iJyA1EbDvRPAxS3J?modestbranding=1&amp" title="Gas Engine Test" frameborder="0" allowfullscreen></iframe>
              </p>
              <p
                className="greeting-text-p greeting-text-div subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"The first video showcases the vibrations of the engine. A fully tightened screw came off in about 10 seconds. The second video is a small part of a throttle test conducted. The third video is five minutes of the ten minute drain test (phone died sadly)."}
              </p>
          </div>
      </div>
    </Fade>
  );
}
