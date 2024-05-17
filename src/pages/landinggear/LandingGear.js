import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import LandingGearText from "./landinggeartext/LandingGearText";
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
            text="Landing Gear CDR 2"
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
          <Button
            text="End of Semester Project Updates"
            newTab={true}
            href={"https://docs.google.com/presentation/d/14h9m5h8jEoRzLz9NAlvC-sSVTNPhJmt1rr4jzm1xW-w/edit?usp=sharing"}
            theme={this.props.theme}
          />
        </div>
        <div className="in-the-page">
          <h1>
            <br></br><br></br>Documentation
          </h1>
        </div>
        <div className="in-the-page">
        <embed src="https://drive.google.com/file/d/1W6c8KmMtOHjC6IMWynjKiyNbrfZLqFAp/preview" width="800" height="1000" allow="autoplay"></embed>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>

    );
  }
}

export default LandingGear;
