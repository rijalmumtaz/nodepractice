import React, { useState } from "react";
import propTypes from "prop-types";
import "./index.scss";

export default function Number(props) {
  const { value, placeholder, name, min, max, prefix, suffix } = props;

  const [InputValue, setInputValue] = useState(`${prefix}${value}${suffix}`);

  const onChange = (e) => {
    let value = String(e.target.value);
    if (prefix) value = value.replace(prefix);
    if (suffix) value = value.replace(suffix);

    const patternNumeric = new RegExp("[0-9]*");
    const isNumeric = patternNumeric.test(value);

    if (isNumeric && +value <= max && +value >= min) {
      // "+value" sama kaya Number(value)
      props.onChange({
        terget: {
          name: name,
          value: +value,
        },
      });
      setInputValue(`${prefix}${value}${suffix}`);
    }
  };

  const minus = () => {
    value > min && onChange({ target: { name: name, value: +value - 1 } });
  };

  const plus = () => {
    value < max && onChange({ target: { name: name, vaue: +value + 1 } });
  };

  return (
    <div className={["input-number mb-3", props.outerClassname].join(" ")}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text minus" onChange={minus}>
            {" "}
            -{" "}
          </span>
        </div>
        <input
          min={min}
          max={max}
          name={name}
          pattern="[0-9]*"
          className="form-control"
          placeholder={placeholder ? placeholder : "0"} //cek apakah place holder null, undefined, atau ""
          value={String(InputValue)}
          onChange={onChange}
        />
        <div className="input-group-append">
          <span className="input-group-text plus" onChange={plus}>
            {" "}
            +{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

Number.defaulProps = {
  min: 1,
  max: 1,
  prefix: "",
  suffix: "",
};

Number.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  placeholder: propTypes.string,
  outerClassname: propTypes.string,
};