import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
//import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-h subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"Hi! I'm Charles, a junior at Cornell University studying Mechanical Engineering and Applied Mathematics."}
              </p>
              <p
                className="greeting-text-h subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"I'm passionate about simulations and design in both aircraft and spaceflight. Since my freshman year, I've been a member of "} <a href="https://cuair.org/index.html" style={{ color: theme.secondaryText}}> Cornell University Unmanned Air Systems (CUAir), </a> {" where we design and build custom UAVs for search and rescue missions.  I'm excited to be the lead of the Structures and Payloads Subteam for CUAir this semester where I will be leading my team to enhance prior designs and explore innovative solutions. My team’s aircraft was ranked 1st place internationally in Fixed-Wing Demonstration and Most Innovative Award in the SUAS competition."}
              </p>
              <p
                className="greeting-text-h subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"In addition to my work with CUAir, I have been responsible for several projects in the "} <a href="https://www.astralab.mae.cornell.edu" style={{ color: theme.secondaryText}}> ASTRA (Advanced Space Technology Research and Architectures) Lab </a> {"at Cornell, including researching various propulsion systems, evaluating their feasibility for long-term space missions, and conducting thermal analysis on Hall thrusters to develop innovative thermal management solutions. I have been thrilled to apply the knowledge gained in the classroom to the projects at CUAir and ASTRA. The hands-on experience these projects provide helps me develop excellent engineering skills to resolve real-world issues."}
              </p>
              <p
                className="greeting-text-h subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"Outside of school, I've been involved in a variety of activities that bring me a lot of joy. I've been playing hockey since I was five years old, and it remains a huge part of my life. Now, in college, I'm proud to be a member of the club hockey team. I am also passionate about hiking. One of my personal goals is to hike a trail in every national park—so far, I’ve covered eight out of sixty-three. My love for the outdoors sparked an interest in photography, especially aerial photography. I enjoy exploring the world from unique perspectives with my drones, capturing breathtaking landscapes from angles that would otherwise be unreachable."}
              </p>
              <p
                className="greeting-text-h subTitle"
                style={{ color: theme.secondaryText }}
              >
                {"Having grown up in an urban area, I have a strong passion for teaching and mentoring inner-city children. In high school, I was a tutor at "} <a href="https://www.sjp2ca.org/lower-mills-campus/" style={{ color: theme.secondaryText}}> St. John Paul II Catholic Academy in Dorchester, Massachusetts, </a> {" where I taught math, physics and poetry. Additionally, I’ve been a hockey and skating coach with "} <a href="https://fmcicesports.com" style={{ color: theme.secondaryText}}> FMC Ice Sports </a> {" . Seeing kids use the skills I taught and be able to skate freely on the ice brings me immense joy."}
              </p>
              <SocialMedia theme={theme} />
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            {/* <img
							alt="saad sitting on table"
							src={require("../../assests/images/feelingProud.svg")}
						></img> */}
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
