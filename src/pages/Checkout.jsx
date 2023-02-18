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

import itemDetails from "json/itemDetails.json";
import { Fade } from "react-reveal";

export default class Checkout extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };

  onChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const { data } = this.state;

    const checkout = {
      duration: 3,
    };

    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields below",
        content: (
          <Bookinginformation
            data={data}
            checkout={checkout}
            itemDetails={itemDetails}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the interactions below",
        content: (
          <Payment
            data={data}
            itemDetails={itemDetails}
            checkout={checkout}
            onChange={this.onChange}
          />
        ),
      },
      completed: {
        title: "Yey!? Completed",
        description: null,
        content: <Completed />,
      },
    };

    return (
      <>
        <Header isCentered />

        <Stepper
          steps={steps}
          // data={data}
        >
          {(prevStep, nextStep, currentStep, steps) => (
            <>
              <Numbering
                data={steps}
                current={currentStep}
                style={{ marginBottom: 50 }}
              />

              <Meta
                data={steps}
                current={currentStep}
              />

              <MainContent
                data={steps}
                current={currentStep}
              />

              {currentStep === "bookinginformation" && (
                <Controller>
                  {/* conditional for hiding the button */}
                  {data.firstName !== "" &&
                    data.lastName !== "" &&
                    data.email !== "" &&
                    data.phone !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn"
                    type="link"
                    isBlock
                    isLight
                    href={`/properties/${itemDetails._id}`}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}
              {currentStep === "payment" && (
                <Controller>
                  {data.proofPayment !== "" &&
                    data.bankName !== "" &&
                    data.bankHolder !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn"
                    type="link"
                    isBlock
                    isLight
                    href={prevStep}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}
              {currentStep === "completed" && (
                <Controller>
                  <Button
                    className="btn"
                    type="link"
                    isPrimary
                    isBlock
                    hasShadow
                    href=""
                  >
                    Back to Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </>
    );
  }
}
