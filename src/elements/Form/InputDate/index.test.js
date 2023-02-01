import React, { Component } from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import InputDate from "./index";

class TestInput extends React.Component {
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
      <InputDate
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
  const wrapper = utils.getByLabelText("input-date");
  const input = utils.getByLabelText("form-control");

  return { wrapper, input, utils, ...utils };
};

test("should have wrapper with className .form-control", () => {
  const { wrapper } = setup();

  expect(wrapper).toBeInTheDocument();
});

test("should has tag <input> and has classname .form-control", () => {
  const { input } = setup();

  expect(input).toBeInTheDocument();
});

test("should show date picker when click input field", () => {
  const { utils, input } = setup();

  screen.debug();
  fireEvent.click(input, { button: 1 });
  const dataPickerWrapper = utils.getByLabelText("date-range-wrapper");
  screen.debug();

  expect(dataPickerWrapper).toBeInTheDocument();
});
