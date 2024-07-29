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
              <p
                className="greeting-text-p greeting-text-div subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"The WEbay system was born out of necessity when the team realized that our aircraft's existing ebay couldn't accommodate all the batteries we needed. Ultimately, it was decided to place additional batteries in the WEbay, an alternate ebay in the wing of the plane. Typical projects have a 5-month design cycle, but because the project was introduced later on in the semester, we were on a two-month timeline. Despite the tight deadline, the WEbay proved to be a success, weighing just 138.4 grams—less than half the weight of the original ebay. Moreover, its manufacturing time was dramatically reduced to just two hours per unit, a significant improvement from the 6-7 hours typically required for an ebay."}
              </p>
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
              <p
                className="greeting-text-p greeting-text-div subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"Throughout the process, our primary concern was weight. The following images depict the iterations we underwent. The initial iteration was discarded due to the use of epoxy, which added significant weight. Additionally, a PLA component was necessary to ensure the flush integration of the WEbay with the fuselage. The second iteration was abandoned because it required aluminum brackets, which were too heavy. Ultimately, we settled on the third iteration after recognizing the opportunity to integrate with another system (Wing to Fuse), thereby reducing weight and eliminating the need for additional components."}
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
