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
                <iframe src="https://www.youtube.com/embed/oZwHqSrRL-E?si=iJyA1EbDvRPAxS3J?modestbranding=1&amp" title="Gas Engine Test" frameborder="0" allowfullscreen></iframe>
              </p>
              <p
                className="greeting-text-p greeting-text-div subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"The first video showcases the vibrations of the engine. A fully tightened screw came off in about 10 seconds. The second video is a small part of a throttle test conducted. The third video is five minutes of the ten minute drain test (phone died sadly)."}
              </p>
              <div className="text-side-side">
                <div>
                  <p className="greeting-text-p greeting-text-header" style={{ color: theme.text }}>
                    {"Overview"}
                  </p>
                  <p
                    className="greeting-text-p greeting-text-div subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {"The gas engine project was a collaborative effort involving over five members of CUAir to replace the plane's current electric engine with a gas engine. The reason for this change was the competition's requirement to fly the plane for approximately 10 miles. The electric engine, limited by the weight and energy density of the batteries, couldn't cover the entire distance. Adding more batteries proved ineffective, as their weight further reduced flight time. Consequently, we needed to find an alternative solution, leading us to explore the gas engine option."}
                  </p>
                </div>
                <div>
                  <p className="greeting-text-p greeting-text-header" style={{ color: theme.text }}>
                    {"Objective"}
                  </p>
                  <p
                    className="greeting-text-p greeting-text-div subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {"The primary objective of the gas engine project was to assess the feasibility of integrating a gas engine into our aircraft. We established three key criteria to determine if the gas engine was a viable solution. First, we needed to ensure the gas engine could operate over the 10-mile distance required for the competition. Second, we aimed to determine whether the vibrations from the gas engine could be dampened. Lastly, we evaluated the feasibility of mounting the gas engine on the plane."}
                  </p>
                </div>
              </div>
              <p className="greeting-text-p greeting-text-header" style={{ color: theme.text }}>
                {"Results"}
              </p>
              <p
                className="greeting-text-p greeting-text-div subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"After extensive trial and error, we successfully started and tuned the engine, verifying two out of the three criteria. The gas engine was proven capable of covering the entire 10-mile distance required, and we managed to securely mount it on the plane. We are currently exploring solutions for vibration dampening and plan to incorporate an autostarter in the next phase."}
              </p>
          </div>
      </div>
    </Fade>
  );
}
