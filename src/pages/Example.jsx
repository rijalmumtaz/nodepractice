import React, { useEffect, useState } from "react";
import { InputDate } from "elements/Form";
import Breadcrumb from "elements/Breadcrumb";

export default function Example() {
  // const breadcrumbList = [
  //   { pageTitle: "Home", pageHref: "" },
  //   { pageTitle: "House Details", pageHref: "" },
  // ];

  const [value, setValue] = useState(new Date());

  useEffect(() => {
    console.log("current value:", value);
  }, [value]);

  // const handleChange = (e) => {
  //   setValue({ value: e.target.value });
  // };

  return (
    <div className="container">
      <div
        className="row align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="col-auto">
          {/* <Breadcrumb data={breadcrumbList} /> */}
          <button onClick={() => setValue((prevValue) => prevValue + 1)}>
            Increment button
          </button>
        </div>
      </div>
    </div>
  );
}

// old code
<>
  {/* export default class Example extends React.Component {
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
} */}
</>;
