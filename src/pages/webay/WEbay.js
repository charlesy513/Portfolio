import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import WEbayText from "./webaytext/WEbayText";
import Button from "../../components/button/Button";
import "./WEbay.css";

class WEbay extends Component {
  render() {
    return (
      <div className="landinggear-main">
        <Header theme={this.props.theme} />
        <WEbayText theme={this.props.theme} />
        <div className="design-review-btn-div">
          <Button
            text="WEbay ?DR"
            newTab={true}
            href={"https://docs.google.com/presentation/d/1EHaadMFDaFVMpjLzryl2l4zR-Z_U41P9RRcaDxYmYEk/edit?usp=sharing"}
            theme={this.props.theme}
          />
          <Button
            text="WEbay CDR 1"
            newTab={true}
            href={"https://docs.google.com/presentation/d/1V6iwUz6IU2ADHh4llux3Is8ZpdMHJb4YceyVSQ4mwjw/edit?usp=sharing"}
            theme={this.props.theme}
          />
          <Button
            text="WEbay CDR 2"
            newTab={true}
            href={"https://docs.google.com/presentation/d/1TjtG7y5JL4oau7cYkTkGYbDblRV62PrOyv4yoAOaevU/edit?usp=sharing"}
            theme={this.props.theme}
          />
          <Button
            text="End of Semester Project Updates"
            newTab={true}
            href={"https://docs.google.com/presentation/d/14h9m5h8jEoRzLz9NAlvC-sSVTNPhJmt1rr4jzm1xW-w/edit?usp=sharing"}
            theme={this.props.theme}
          />
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>

    );
  }
}

export default WEbay;
