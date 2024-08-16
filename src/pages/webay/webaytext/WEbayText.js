import React from "react";
import "./WEbayText.css";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
          <div className="greeting-text-div">
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {"WEbay"}
              </h1>
              <p className="image-side-side">
                <img
                    src={require(`../../../assests/images/webaypics/IMG_6334.JPG`)}
                    alt="Webay with batteries out on wing"
                />
                <img
                    src={require(`../../../assests/images/webaypics/IMG_3837.jpg`)}
                    alt="Webay with batteries inside"
                />
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
                    {"The wing-electrical bay (WEbay) system was a project I undertook for CUAir, born out of necessity when the team realized our aircraft's existing electrical bay (Ebay) couldn't accommodate all the required batteries. We decided to place additional batteries in a new electrical bay located in the wing of the plane. While typical projects follow a 5-month design cycle, this project was introduced later in the semester, giving me just two months to complete it."}
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
                    {"The goal of this project was to design an electrical bay in the wing of the plane that could securely hold four flight batteries. The batteries needed to be easily accessible for quick plugging and unplugging. Additionally, the electrical bay should either be removable or designed with a high factor of safety to allow for repairs or minimize the risk of damage. Lastly, the WEbay needed to be as lightweight as possible."}
                  </p>
                </div>
                <div>
                  <p className="greeting-text-p greeting-text-header" style={{ color: theme.text }}>
                    {"Results"}
                  </p>
                  <p
                    className="greeting-text-p greeting-text-div subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {"The WEbay system was a success, weighing only 138.4 grams—less than half the weight of the original Ebay. Additionally, its manufacturing time was dramatically reduced to just two hours per unit, compared to the 6-7 hours typically required for an Ebay. The new WEbay also offers easy access at the top of the wing and can be quickly removed by loosening just four screws."}
                  </p>
                </div>
              </div>
              <p
                className="greeting-text-p greeting-text-div subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"Throughout the process, our primary concerns were weight and strength. The following images illustrate the iterations we went through. The first iteration was discarded due to the use of epoxy, which added significant weight. Additionally, a PLA component was required to ensure the flush integration of the WEbay with the fuselage, which was a weak point in the design. The second iteration was abandoned because it relied on aluminum brackets, which were too heavy. Ultimately, we settled on the third iteration, as it allowed us to integrate with the Wing-to-Fuse system, reducing weight and eliminating the need for additional components while maintaining the strength of the system."}
              </p>
              <p className="image_settings">
                <img height="202"
                    src={require(`../../../assests/images/webaypics/v1.png`)}
                    alt="original"
                />
                <img height="202"
                    src={require(`../../../assests/images/webaypics/v2.png`)}
                    alt="v2"
                />
                <img height="202"
                    src={require(`../../../assests/images/webaypics/v3.png`)}
                    alt="v3"
                />
              </p>
              <p
                className="greeting-text-p greeting-text-div subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"Here are pictures of the finish result:"}
              </p>
              <p className="image_settings">
                <img height="500"
                    src={require(`../../../assests/images/webaypics/IMG_3838.jpg`)}
                    alt="before wing closing"
                />
                <img height="500"
                    src={require(`../../../assests/images/webaypics/IMG_3833.jpg`)}
                    alt="with hatch open"
                />
                <img height="500"
                    src={require(`../../../assests/images/webaypics/IMG_3835.jpg`)}
                    alt="with hatch closed"
                />
              </p>
          </div>
      </div>
    </Fade>
  );
}
