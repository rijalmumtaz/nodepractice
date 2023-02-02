import React from "react";

import propTypes from "prop-types";
import Button from "elements/Button";

import "./index.scss";

export default function Breadcrumb(props) {
  return <div>Breadcrumb</div>;
}

Breadcrumb.propTypes = {
  data: propTypes.array,
  className: propTypes.string,
};
