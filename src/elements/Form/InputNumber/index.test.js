import React, { useState } from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import InputNumber from "./index";

class TestInput extends React.Component {
  state = {
    value: "",
  };
  handleChange = (e) => {
    console.log("event: ", e);
    console.log("value: ", e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <InputNumber
        max={30}
        onChange={this.handleChange}
        name="value"
        value={this.state.value}
      />
    );
  }
}

const setup = () => {
  const utils = render(<TestInput />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const input = utils.getByLabelText("input-number", {
    classname: "form-control",
    name: "value",
  });

  return { input, ...utils };
};

test("Should able to change value", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: 23 } });
  console.log(input.value);
  expect(input.value).toBe("23");
});

test("Should not be able to change when reach max value", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: 31 } });
  console.log(input.value);
  expect(input.value).toBe("");
});
