import React, { useState } from "react";
import InputNumber from "elements/Form/InputNumber";

export default function Example() {
  const [value, setValue] = useState("1");
  const handleChange = (e) => {
    const value = e.value;
    const inputtedValue = value;
    setValue(inputtedValue);
    // this.setState({ [e.target.name]: e.target.value });
    // this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };
  return (
    <div className="container">
      <div
        className="row align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="col-auto">
          <InputNumber
            max={30}
            suffix=" night"
            isSuffixPlural
            onChange={handleChange}
            name="value"
            value={value}
          />
        </div>
      </div>
    </div>
  );
}

// export default class Example extends Component {
//   state = {
//     value: "",
//   };
//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   render() {
//     return (
//       <div className="container">
//         <div
//           className="row align-items-center justify-content-center"
//           style={{ height: "100vh" }}
//         >
//           <div className="col-auto">
//             <InputNumber
//               max={30}
//               onChange={this.handleChange}
//               name="value"
//               value={this.state.value}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
