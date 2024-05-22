import React from "react";
import "./CarText.css";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
          <div className="greeting-text-div">
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {"Mercedes AMG Car CAD"}
              </h1>
              <p className="contact-heading-img-div">
                <img
                    src={require(`../../../assests/images/carpics/carfront.png`)}
                    alt="car from front"
                    />
                <img
                    src={require(`../../../assests/images/carpics/carback.png`)}
                    alt="car from back"
                    />
              </p>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"My Mercedes car CAD project was a learning experience to fully utilize the extensive features of SOLIDWORKS. I chose a design with complex geometries to challenge myself and explore the most efficient methods for creating various shapes. It took me about 30-40 hours to complete the shell of the body, and now I plan to use this cover to create a functional RC car."}
              </p>
              <div className="image">
                <figure>
                  <video controls loop autoplay width="90%" src={require(`../../../assests/images/carpics/topframe.mp4`)} alt="frame of car"/>
                  <figcaption>Top Frame</figcaption>
                </figure>
                <figure>
                  <img width="90%" src={require(`../../../assests/images/carpics/tire.png`)} alt="tire of car"/>
                  <figcaption>Tire</figcaption>
                </figure>
              </div>
              <div className="image">
                <figure>
                  <img width="90%" src={require(`../../../assests/images/carpics/frontlight.png`)} alt="frontlight of car"/>
                  <figcaption>Front Light</figcaption>
                </figure>
                <figure>
                  <img width="90%" src={require(`../../../assests/images/carpics/backlight.png`)} alt="backlight of car"/>
                  <figcaption>Back Light</figcaption>
                </figure>
              </div>
              <div className="image">
                <figure>
                  <img width="90%" src={require(`../../../assests/images/carpics/spoiler.png`)} alt="spoiler of car"/>
                  <figcaption>Spoiler</figcaption>
                </figure>
                <figure>
                  <img width="90%" src={require(`../../../assests/images/carpics/door.png`)} alt="door of car"/>
                  <figcaption>Door</figcaption>
                </figure>
              </div>
              <div className="image">
                <figure>
                  <img width="90%" src={require(`../../../assests/images/carpics/diffuser.png`)} alt="diffuser of car"/>
                  <figcaption>Diffuser</figcaption>
                </figure>
                <figure>
                  <img width="90%" src={require(`../../../assests/images/carpics/exhaust.png`)} alt="exhaust of car"/>
                  <figcaption>Exhaust</figcaption>
                </figure>
              </div>
              <div className="image">
                <figure>
                  <img width="90%" src={require(`../../../assests/images/carpics/rims.png`)} alt="rims of car"/>
                  <figcaption>Rims</figcaption>
                </figure>
                <figure>
                  <video controls loop autoplay width="90%" src={require(`../../../assests/images/carpics/Frame.mp4`)} alt="frame assembly"/>
                  <figcaption>Frame Assembly</figcaption>
                </figure>
              </div>
              <p className="video">
                <video height="500" width="889" src={require(`../../../assests/images/carpics/carassembly.mp4`)} title="CAD Assembly of Car" controls frameborder="0" allowfullscreen></video>
              </p>
          </div>
      </div>
    </Fade>
  );
}
