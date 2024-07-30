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
                className="greeting-text-p greeting-text-div subTitle"
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
              <p class="image_gap margin">
                <video controls width="800" src={require(`../../../assests/images/planepics/Assembly of Plane.mp4`)} title="Plane CAD Break" frameborder="0" allowfullscreen></video>
              </p>
              <h1 className="text_center">
              V2 ANSYS
              </h1>
              <p className="image-side-side">
                <img
                    src={require(`../../../assests/images/planepics/777mainpic.png`)}
                    alt="777 from front"
                    />
                <video controls
                    src={require(`../../../assests/images/planepics/planev2cad.mp4`)}
                    alt="777 from side"
                    />
              </p>
              <p
                className="greeting-text-p greeting-text-div subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"I first quickly completed a CAD of an existing plane that I thought would be cool for simulations. I used the Boeing 777-300ER because the airframe geometry is proven to fly with its many years of history."}
              </p>
              <p
                className="greeting-text-p greeting-text-div subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"I created a bounding box for the simulation and then created the meshes of the area."}
              </p>
              <p className="image-side-side">
                <img
                    src={require(`../../../assests/images/planepics/ansysboundingbox.png`)}
                    alt="bounding box for 777"
                    />
                <img
                    src={require(`../../../assests/images/planepics/bigscale.png`)}
                    alt="simple mesh for 777"
                    />
              </p>
              <p className="image-side-side">
                <img
                    src={require(`../../../assests/images/planepics/zoommesh.png`)}
                    alt="close up mesh for 777"
                    />
                <img
                    src={require(`../../../assests/images/planepics/zoommeshbetter.png`)}
                    alt="better close up mesh 777"
                    />
              </p>
              <p
                className="greeting-text-p greeting-text-div subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"I made the front wall the inlet and the back wall the outlet. The other four walls had no shear and the plane outline was made to be a wall with the no-slip boundary condiiton. The velocity of the plane (initial velocity) was first set to 25 m/s. Here were the results:"}
              </p>
              <p className="image-side-side">
                <img
                    src={require(`../../../assests/images/planepics/convergence.png`)}
                    alt="covergence of variables"
                    />
                <img
                    src={require(`../../../assests/images/planepics/velocity1.png`)}
                    alt="velocity graph"
                    />
              </p>
              <p className="image-side-side">
                <img
                    src={require(`../../../assests/images/planepics/pressure.png`)}
                    alt="pressure graph"
                    />
                <img
                    src={require(`../../../assests/images/planepics/velocity2.png`)}
                    alt="velocity graph"
                    />
              </p>
              <p className="image-side-side">
                <img
                    src={require(`../../../assests/images/planepics/results1.png`)}
                    alt="results lift and drag"
                    />
              </p>
              <p
                className="greeting-text-p greeting-text-div subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"Considering a RC plane around the size of 1 meter in length is around 2 kg, I assumed the plane had a weight of around 19.6 N. The plane has lift and a small component of the thrust from the motors. I would like to see lift to be around 12-13 N. I then set the velocity to 35 m/s."}
              </p>
              <p className="image-side-side">
                <img
                    src={require(`../../../assests/images/planepics/convergence2.png`)}
                    alt="convergence graph"
                    />
                <img
                    src={require(`../../../assests/images/planepics/velocity3.png`)}
                    alt="velocity graph"
                    />
              </p>
              <p className="image-side-side">
                <img
                    src={require(`../../../assests/images/planepics/results2.png`)}
                    alt="results lift and drag"
                    />
              </p>
              <p
                className="greeting-text-p greeting-text-div subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"13 N of lift is not bad. Considering if the plane had a 1 to 1 thrust to weight ratio, the angle for the motor to produce enough thrust to lift the plane would be about 20 degrees. This is higher than the normal rotation rate of 10 degrees for a boeing 777. However, it is quite normal for a RC aircraft."}
              </p>
              <p
                className="greeting-text-p greeting-text-div subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"I also put the velocity of the plane at 50 m/s for fun. At this speed, we can start seeing some pressure differential, as the pressure above the plane is slightly lower than below the plane, thus causing the lift."}
              </p>
              <p className="image-side-side">
                <img
                    src={require(`../../../assests/images/planepics/pressure1.png`)}
                    alt="pressure graph"
                    />
                <img
                    src={require(`../../../assests/images/planepics/pressure2.png`)}
                    alt="pressure graph"
                    />
              </p>
              <p className="image-side-side">
                <img
                    src={require(`../../../assests/images/planepics/pressure3.png`)}
                    alt="pressure graph"
                    />
                <img
                    src={require(`../../../assests/images/planepics/results3.png`)}
                    alt="results lift and drag"
                    />
              </p>
              <p
                className="greeting-text-p greeting-text-div subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"I also have a video of how the air moves around the plane, which I think is pretty cool. Overall, I'm pretty certain if everything goes well, if I made a RC plane of this geometry, it will fly."}
              </p>
              <p class="image_gap">
                <video controls width="800" src={require(`../../../assests/images/planepics/velocityvectors.mov`)} title="Plane velocity video" frameborder="0" allowfullscreen></video>
              </p>
          </div>
      </div>
    </Fade>
  );
}
