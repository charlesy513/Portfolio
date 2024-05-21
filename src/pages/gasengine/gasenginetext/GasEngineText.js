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
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"The gas engine project involved a collaboration of more than five people, all collaborating towards a common goal: transitioning our plane from an electric engine to a gas engine. Our competition required us to fly the plane for approximately 10 miles, but the electric engine couldn't cover the entire distance. Adding more batteries proved ineffective since their weight further reduced flight time. The team tirelessly researched how to install a gas engine and studied its effects on range and vibrations. Initially, we also planned to create a smaller secondary plane with a glow engine for testing, but this project was set aside to prioritize getting our main plane airborne. The team successfully started and tuned the gas engine, but there wasn't enough time in the semester to mount the engine on our plane."}
              </p>
              <p className="contact-heading-img-div">
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
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"The video on the left showcases the amount of vibration there is. A fully tightened screw came off in about 10 seconds. The video on the right showcases a throttle test conducted. The video under is five minutes of the ten minute drain test."}
              </p>
          </div>
      </div>
    </Fade>
  );
}
