import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import PlaneText from "./planetext/PlaneText";
import "./Plane.css";

class Plane extends Component {
  render() {
    return (
      <div className="landinggear-main">
        <Header theme={this.props.theme} />
        <PlaneText theme={this.props.theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>

    );
  }
}

export default Plane;
