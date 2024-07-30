import React, { Component } from "react";
import TopButton from "../../components/topButton/TopButton";
import PhoneCaseText from "./phonecasetext/PhoneCaseText";
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
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
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>

    );
  }
}

export default PhoneCase;
