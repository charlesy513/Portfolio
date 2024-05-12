import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import PushMountText from "./pushmounttext/PushMountText";
import Button from "../../components/button/Button";
import "./PushMount.css";

class PushMount extends Component {
  render() {
    return (
      <div className="landinggear-main">
        <Header theme={this.props.theme} />
        <PushMountText theme={this.props.theme} />
        <div className="design-review-btn-div">
          <Button
            text="Landing Gear EDR"
            newTab={true}
            href={"https://docs.google.com/presentation/d/19VfPxbI1uL5RqjyfQNm2wnZ3wAxONODRSc_kJgdxKDM/edit?usp=sharing"}
            theme={this.props.theme}
          />
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>

    );
  }
}

export default PushMount;
