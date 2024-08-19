import React from "react";
import "./LandingGearText.css";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
          <div className="greeting-text-div">
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {"Atlas Landing Gear"}
              </h1>
              <div className="image-side-side">
                <img
                    src={require(`../../../assests/images/landinggearpics/front_plane_landing_gear.jpg`)}
                    alt="Landing Gear from front of plane perspective"
                    />
                    <img
                    src={require(`../../../assests/images/landinggearpics/side_plane_landing_gear.JPG`)}
                    alt="Landing Gear from side of plane perspective"
                    />
              </div>
              <div className="text-side-side">
                <div>
                  <p className="greeting-text-p greeting-text-header" style={{ color: theme.text }}>
                    {"Overview"}
                  </p>
                  <p
                    className="greeting-text-p greeting-text-div subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {"Cornell University Unmanned Air Systems (CUAir) is a student-run project team at Cornell University with the goal of designing and manufacturing an autonomous aircraft to compete in the SUAS Competition. Our newest aircraft, Atlas, is currently being manufactured to address the weaknesses of its predecessor, Artemis. One of the projects I contributed to on the Atlas airframe was the design of the landing gear system."}
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
                    {"In this project, I was responsible for the design and manufacturing of the landing gear system on the Atlas airframe. My goal was to design a landing gear system capable of supporting the aircraft's weight, approximately 55 lbs, while enabling both horizontal and vertical takeoffs and landings. Additionally, the system ideally should weigh no more than 1.5 kg."}
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
                {"I designed and constructed the landing gear system entirely from scratch, witnessing its evolution from concept to completion. This system was able to support the weight of a 55 lb fixed-wing VTOL aircraft. It boasts features such as nose-wheel steering and suspension systems. These components rely on carefully selected, robust springs, chosen through meticulous calculations tailored to various scenarios. The system's reliability was confirmed through rigorous testing and validation via ANSYS analysis. Further, despite the originally allocated weight limit of 1.5 kg, I optimized its design to utilize only 1.25 kg, ensuring compliance with FAA regulations for the entire aircraft."}
              </p>
          </div>
      </div>
    </Fade>
  );
}
