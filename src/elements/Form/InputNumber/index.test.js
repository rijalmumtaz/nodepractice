import React, { useState } from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import InputNumber from "./index";

function TestInput() {
  const [value, setValue] = useState("");
  function handleChange(e) {
    const eTarget = e.target.value;
    console.log(eTarget);
    // const value = e.target.value;
    // const inputtedValue = value;
    setValue(e.target.value);
    // this.setState({ [e.target.name]: e.target.value });
    // this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  return (
    <InputNumber
      max={30}
      onChange={handleChange}
      name="value"
      value={value}
    />
  );
}

// class TestInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: "",
//     };

//     this.handleChange = this.handleChange(this);
//   }
//   handleChange = (e) => {
//     this.setState({ value: e.target.value });
//     // this.setState({ [e.currentTarget.name]: e.currentTarget.value });
//   };
//   render() {
//     return (
//       <InputNumber
//         max={30}
//         onChange={this.handleChange}
//         name="value"
//         value={this.state.value}
//       />
//     );
//   }
// }

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
