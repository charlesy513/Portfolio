import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import CarText from "./cartext/CarText";
import Button from "../../components/button/Button";
import "./Car.css";

class Car extends Component {
  render() {
    return (
      <div className="landinggear-main">
        <Header theme={this.props.theme} />
        <CarText theme={this.props.theme} />
        <div className="design-review-btn-div">
          <Button
            text="Download CAD Files"
            newTab={true}
            href={"https://drive.google.com/file/d/19zrUD-0jzWEaRwgbDhoqOVGPQsAdxkXn/view?usp=sharing"}
            theme={this.props.theme}
          />
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Car;
