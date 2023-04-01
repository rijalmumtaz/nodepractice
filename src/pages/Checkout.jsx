import React, { Component, useEffect, useState } from "react";

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

// redux
import { connect } from "react-redux";

function Checkout(props) {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    proofPayment: "",
    bankName: "",
    bankHolder: "",
  });

  const { checkout } = props;

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (!checkout) {
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center text-center"
          style={{ height: "100vh" }}
        >
          <div className="col-3">
            Pilih Kamar Dulu
            <div>
              <Button
                className="btn mt-5"
                type="link"
                href="/"
                isLight
              >
                Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
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
          onChange={onChange}
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
          onChange={onChange}
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

      <Stepper steps={steps}>
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

            {currentStep === "bookingInformation" && (
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
                  style={{ padding: "0 .375rem 0 .375rem", width: 161.4 }}
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
                  style={{ padding: "0 .375rem 0 .375rem", width: 161.4 }}
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
                  style={{ padding: "0 .375rem 0 .375rem", width: 170 }}
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

// for storing data from previous page
const mapStateToProps = (state) => ({
  checkout: state.checkout,
});

export default connect(mapStateToProps)(Checkout);

// old code
<>
  {/* export default class Checkout extends Component {
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
    // console.log(data);

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

        <Stepper steps={steps}>
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

              {currentStep === "bookingInformation" && (
                <Controller>
                  conditional for hiding the button
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
                    style={{ padding: "0 .375rem 0 .375rem", width: 161.4 }}
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
                    style={{ padding: "0 .375rem 0 .375rem", width: 161.4 }}
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
                    style={{ padding: "0 .375rem 0 .375rem", width: 170 }}
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
} */}
</>;
