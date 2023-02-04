import React, { useState } from "react";
import { InputDate } from "elements/Form";
import Breadcrumb from "elements/Breadcrumb";

export default class Example extends React.Component {
  breadcrumbList = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <Breadcrumb data={this.breadcrumbList} />
          </div>
        </div>
      </div>
    );
  }
}
