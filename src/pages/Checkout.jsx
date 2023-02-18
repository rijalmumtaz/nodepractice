import React, { Component } from "react";

import Header from "parts/Header";
import Button from "elements/Button";
import Stepper, {
  Numbering,
  Controller,
  Meta,
  MainContent,
} from "elements/Stepper";
import Bookinginformation from "parts/Checkout/Bookinginformation";
import Payment from "parts/Checkout/Payment";
import Completed from "parts/Checkout/Completed";

export default class Checkout extends Component {
  render() {
    return (
      <>
        <Header isCentered />
      </>
    );
  }
}
