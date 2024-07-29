import React from "react";
import "./PushMountText.css";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
          <div className="greeting-text-div">
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {"Push Propeller Mount"}
              </h1>
              <p
                className="greeting-text-p greeting-text-div subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"During the Spring Semester of 2023, I undertook the Push Propeller Mount optimization project aimed at reducing the weight of our entire plane system. The propeller mount emerged as a significant target for weight reduction, initially weighing 250 grams and consisting of a bulky aluminum block located at the rear of our fuselage. This weight imbalance contributed to tail heaviness and posed a risk of stall. I took on the responsibility of reducing the mass of the push propeller mount as much as possible without compromising integrity. Ultimately, I succeeded in reducing the mount's mass to 50 grams, achieving an impressive 80% reduction. To ensure the integrity of the mount, I conducted ANSYS simulations, confirming its structural soundness. Furthermore, I performed rigorous testing on the propeller mount, including subjecting it to 100% thrust for 30 seconds with the motor and propeller installed, validating the accuracy of my simulations."}
              </p>
              <p className="image-side-side">
                <img
                    src={require(`../../../assests/images/pushmountpics/image (1).png`)}
                    alt="pushmount unbent"
                />
                <img
                    src={require(`../../../assests/images/pushmountpics/image (3).png`)}
                    alt="pushmount bent"
                />
              </p>
              <p
                className="greeting-text-p greeting-text-div subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"To conduct the ANSYS analysis accurately, I initially divided the body into three distinct sections: the top mount, bottom mount, and the area where the push motor will be situated. This division allows for targeted application of pressure specifically on the mount section where the propeller is located. After importing the model into ANSYS, I generated varying mesh qualities for each section, ensuring higher fidelity where necessary. Subsequently, I defined contact regions as bonded and applied appropriate boundary conditions. Fixed supports were allocated to the screw holes, while frictionless supports were designated for both the top and bottom surfaces, given their constraint within the fuselage."}
              </p>
              <p className="image_settings">
                <img height="300"
                    src={require(`../../../assests/images/pushmountpics/image (2).png`)}
                    alt="three sections"
                />
                <img height="300"
                    src={require(`../../../assests/images/pushmountpics/image (8).png`)}
                    alt="mesh setup"
                />
                <img height="300"
                    src={require(`../../../assests/images/pushmountpics/image (7).png`)}
                    alt="applied forces and boundary conditions"
                />
              </p>
              <p
                className="greeting-text-p greeting-text-div subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"I added 5052 aluminum to the materials list and applied it to the model. Here are the results after I solved:"}
              </p>
              <p className="image_center image-side-side">
                <h2>
                    <br></br><br></br><br></br>Deformation
                </h2>
                <img width="800"
                    src={require(`../../../assests/images/pushmountpics/image (4).png`)}
                    alt="deformation"
                />
              </p>
              <p className="image_center image-side-side">
                <h2>
                    <br></br><br></br><br></br>Equivalent Stress
                </h2>
                <img width="800"
                    src={require(`../../../assests/images/pushmountpics/image (5).png`)}
                    alt="Equivalent Stress"
                />
              </p>
              <p className="image_center  image-side-side">
                <h2>
                    <br></br><br></br><br></br>Maximum Principal Stress
                </h2>
                <img width="800"
                    src={require(`../../../assests/images/pushmountpics/image (9).png`)}
                    alt="Maximum Principal Stress"
                />
              </p>
              <p className="image_center image-side-side">
                <h2>
                    <br></br><br></br><br></br>Equivalent Elastic Strain
                </h2>
                <img width="800"
                    src={require(`../../../assests/images/pushmountpics/image (6).png`)}
                    alt="Equivalent Elastic Strain"
                />
              </p>
              <p
                className="greeting-text-p greeting-text-div subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"Upon reviewing the results, I gained confidence in my design, noting that the Equivalent Stress remained comfortably below half of the yield stress of 5052 aluminum. Furthermore, the displacement measured only 0.28mm."}
              </p>
              <p
                className="greeting-text-p greeting-text-div subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"Following the simulation, I conducted physical testing on the mount by fixing the motor and propeller and operating at 100% throttle for 30 seconds. The following photos are of the mount after the test, which show the mount sustaining the load without fail."}
              </p>
              <p className="image-side-side">
                <img height="350"
                    src={require(`../../../assests/images/pushmountpics/DSC03054.JPG`)}
                    alt="pushmount after test 1"
                />
                <img height="350"
                    src={require(`../../../assests/images/pushmountpics/DSC03057.JPG`)}
                    alt="pushmount after test 2"
                />
              </p>
              <p
                className="greeting-text-p greeting-text-div subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"Here is the mount on our plane:"}
              </p>
              <p className="image_gap">
                <img width="800"
                    src={require(`../../../assests/images/pushmountpics/DSC05943.JPG`)}
                    alt="Mount on plane"
                />
              </p>
          </div>
      </div>
    </Fade>
  );
}
