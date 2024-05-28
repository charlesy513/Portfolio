import React, { Component } from "react";
import TopButton from "../../components/topButton/TopButton";
import PhoneCaseText from "./phonecasetext/PhoneCaseText";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import Header from "../../components/header/Header";
import "./PhoneCase.css";

class PhoneCase extends Component {
  render() {
    return (
      <div className="landinggear-main">
        <Header theme={this.props.theme} />
        <PhoneCaseText theme={this.props.theme} />
        <div className="design-review-btn-div">
          <Button
            text="Final Report"
            newTab={true}
            href={"https://docs.google.com/document/d/1f-k_Pd2PLle7OhJr6dlDqmEpIUDcF9tz_Qu9p44DPIs/edit?usp=sharing"}
            theme={this.props.theme}
          />
        </div>
        <TopButton theme={this.props.theme} />
        <div className="footer-div">
          <Fade>
            <p className="footer-text">
              © 2024 The Trojan Case
            </p>
            {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
          </Fade>
        </div>
      </div>

    );
  }
}

export default PhoneCase;
