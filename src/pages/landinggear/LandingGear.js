import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import LandingGearText from "../../containers/landinggeartext/LandingGearText";
import Button from "../../components/button/Button";
import "./LandingGear.css";

class LandingGear extends Component {
  render() {
    return (
      <div className="landinggear-main">
        <Header theme={this.props.theme} />
        <LandingGearText theme={this.props.theme} />
        <div className="design-review-btn-div">
          <Button
            text="Landing Gear EDR"
            newTab={true}
            href={"https://docs.google.com/presentation/d/19VfPxbI1uL5RqjyfQNm2wnZ3wAxONODRSc_kJgdxKDM/edit?usp=sharing"}
            theme={this.props.theme}
          />
          <Button
            text="Landing Gear PDR"
            newTab={true}
            href={"https://docs.google.com/presentation/d/1eoBiwu1K8oX0I_q0tm77uz1N-LdtkNm4sYq3R2A3I-M/edit?usp=sharing"}
            theme={this.props.theme}
          />
          <Button
            text="Landing Gear CDR"
            newTab={true}
            href={"https://docs.google.com/presentation/d/1-yX0Ss06IRMBDg38O-ZUQ93PXUmqM9rhdF_MHxE8odc/edit?usp=sharing"}
            theme={this.props.theme}
          />
        </div>
        <div className="design-review-btn-div">
          <Button
            text="Landing Gear CDR 2.0"
            newTab={true}
            href={"https://docs.google.com/presentation/d/1NOKRAwD3FdCFpEfDJtf5tSYYxhc98nW3GDt6ZPjPhcU/edit?usp=sharing"}
            theme={this.props.theme}
          />
          <Button
            text="Landing Gear FDR"
            newTab={true}
            href={"https://docs.google.com/presentation/d/1H1-3i_NhNjL1-qK-uqpZYWpBUC7i47ErKovXdhlmhVY/edit?usp=sharing"}
            theme={this.props.theme}
          />
        </div>
        <div className="in-the-page">
        <embed src="../../assests/pdf/Landing_Gear.pdf" width="1200" height="1000"></embed>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>

    );
  }
}

export default LandingGear;
