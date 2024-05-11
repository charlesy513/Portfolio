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
                {"Landing Gear"}
              </h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"I designed and constructed the landing gear system entirely from scratch, witnessing its evolution from concept to completion. This system is essential for supporting the weight of a 55lb fixed-wing VTOL aircraft. It boasts features such as nose-wheel steering and suspension systems. These components rely on carefully selected, robust springs, chosen through meticulous calculations tailored to various scenarios. The system's reliability was confirmed through rigorous testing and validation via ANSYS analysis. Despite originally having an allocated weight limit of 1.5kg, I optimized its design to utilize only around 1.25kg, ensuring compliance with FAA regulations for the entire aircraft, which was close to exceeding 55lbs."}
              </p>
              <p className="contact-heading-img-div">
                <img
                    src={require(`../../assests/images/front_plane_landing_gear.jpg`)}
                    alt="Landing Gear from front of plane perspective"
                    />
                    <img
                    src={require(`../../assests/images/side_plane_landing_gear.JPG`)}
                    alt="Landing Gear from side of plane perspective"
                    />
              </p>
          </div>
      </div>
    </Fade>
  );
}
