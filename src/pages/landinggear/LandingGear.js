import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import OpensourceCharts from "../../containers/opensourceCharts/OpensourceCharts";
import Issues from "../../containers/issues/Issues";
import "./LandingGear.css";

class LandingGear extends Component {
  render() {
    return (
      <div className="landinggear-main">
        <Header theme={this.props.theme} />
        <OpensourceCharts theme={this.props.theme} />
        <Issues theme={this.props.theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
      </div>
    );
  }
}

export default LandingGear;
