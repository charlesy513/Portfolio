import React from "react";
import "./PhoneCaseText.css";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
          <div className="greeting-text-div">
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {"The Trojan Case"}
              </h1>
              <p className="image_center">
                    <video width="600" height="350" controls
                    src={require(`../../../assests/images/phonecasepics/video.mp4`)}
                    title="Video of use of phone case"
                    />
                    <video width="600" height="350" controls
                    src={require(`../../../assests/images/phonecasepics/Full Assembly Phone Case v18.mp4`)}
                    title="Video of use of phone assembly"
                    />
              </p>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"Our case boasts state-of-the-art design, offering the versatility to stand both horizontally and vertically. Despite packing numerous functionalities, it maintains a remarkably slim profile of only 0.65 inches when attached to the phone, a rarity in the industry. Say goodbye to propping your phone with a water bottle or struggling with a bulky pocket. The Trojan Case is here, protecting you always."}
              </p>
              <div class="container">
                <p
                  className="phone_text subTitle"
                  style={{ color: theme.secondaryText }}
                  >
                  Stats for the case:<br></br>-Can prop phone in the horizontal direction.<br></br>-Can prop phone in the vertical direction.<br></br>-Can hold up to three cards.<br></br>-Is 0.65 inches thick.<br></br>-Can easily fit in pocket.<br></br>-Grip level can be changed.
                </p>
                <img height="250"
                src={require(`../../../assests/images/phonecasepics/IMG_2119.jpg`)}
                alt="phone in vertical"
                />
                <img height="250"
                src={require(`../../../assests/images/phonecasepics/IMG_2113.jpg`)}
                alt="phone in horizontal"
                />
              </div>
              <div className="image_center">
                <img width="1200"
                src={require(`../../../assests/images/phonecasepics/hands_free.jpg`)}
                alt="hands free ad"
                />
              </div>
              <h1 className="text_center">
              Renderings
              </h1>
              <p className="image_center">
                    <img width="600" height="350"
                    src={require(`../../../assests/images/phonecasepics/rendering1.png`)}
                    alt="rending1"
                    />
                    <img width="600" height="350"
                    src={require(`../../../assests/images/phonecasepics/rendering2.png`)}
                    alt="rendering2"
                    />
              </p>
          </div>
      </div>
    </Fade>
  );
}
