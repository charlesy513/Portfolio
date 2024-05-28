import React from "react";
import "./PlaneText.css";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
          <div className="greeting-text-div">
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {"Remote Control Plane"}
              </h1>
              <p className="image-side-side">
                <img
                    src={require(`../../../assests/images/planepics/IMG_1035.jpg`)}
                    alt="Plane from front"
                    />
                <img
                    src={require(`../../../assests/images/planepics/IMG_1036.jpg`)}
                    alt="Plane from side"
                    />
              </p>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"I was inspired to begin this project after seeing videos of people online making RC planes out of Lightweight PLA. Since I already have many foam planes, I wanted to try something new. I decided to create a glider-type aircraft for FPV (First-Person View) with a gimbal-mounted camera on the nose for aerial surveillance. I designed the entire plane from scratch using CAD, meticulously planning every detail. However, during testing, the plane failed to fly due to two issues: the motor did not perform at the advertised RPM, and the small wheels kept getting caught on small rocks on the runway, significantly reducing speed. For V2, I plan to increase the wheel size and get a motor that meets the required specifications. After successfully flying, I will then implement the FPV gimbal system."}
              </p>
              <p className="image-side-side">
                <img
                    src={require(`../../../assests/images/planepics/side.png`)}
                    alt="Plane from side in CAD"
                    />
                <img
                    src={require(`../../../assests/images/planepics/back.png`)}
                    alt="Plane from back in CAD"
                    />
              </p>
              <p className="video">
                <iframe height="432" width="950" src={require(`../../../assests/images/planepics/Assembly of Plane.mp4`)} title="Gas Engine Test" frameborder="0" allowfullscreen></iframe>
              </p>
          </div>
      </div>
    </Fade>
  );
}
