import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import GasEngineText from "./gasenginetext/GasEngineText";
import Button from "../../components/button/Button";
import "./GasEngine.css";

class GasEngine extends Component {
  render() {
    return (
      <div className="landinggear-main">
        <Header theme={this.props.theme} />
        <GasEngineText theme={this.props.theme} />
        <div className="design-review-btn-container">
          <div className="design-review-btn-div unique-btn-div">
            <Button
              text="Gas Engine CDR"
              newTab={true}
              href={"https://docs.google.com/presentation/d/1V0Q0whgbvaNjV157AfQ4PA5V_5mFnDFVYJ2lKVvJn0U/edit?usp=sharing"}
              theme={this.props.theme}
            />
          </div>
        </div>
        <div className="in-the-page">
          <h1>
            <br></br><br></br>Documentation
          </h1>
        </div>
        <div className="in-the-page">
          <embed src="https://drive.google.com/file/d/1OSj00aY4fTxwkNsSKnEzNVKICDSw-pvS/preview" width="800" height="1000" allow="autoplay"></embed>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default GasEngine;
