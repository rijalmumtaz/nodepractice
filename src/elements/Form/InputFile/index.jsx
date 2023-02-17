import React, { useRef } from "react";
import propTypes from "prop-types";

import "./index.scss";

export default function File(props) {
  const {
    value,
    accept,
    placeholder,
    name,
    prepend,
    append,
    outerClassName,
    inputClassName,
  } = props;

  const refInputFile = useRef(null);

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          type="file"
          accept={accept}
          ref={refInputFile}
          name={name}
          className="d-none"
          value={value}
          onChange={props.onChange}
        />
        <input
          className={["form-control", inputClassName].join(" ")}
          defaultValue={value}
          placeholder={placeholder}
          onClick={() => refInputFile.current.click()}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
    </div>
  );
}

Text.defaultProps = {
  placeholder: "Please type here...",
};

Text.propTypes = {
  name: propTypes.string.isRequired,
  accept: propTypes.string.isRequired, //untuk mengatur bentuk file kaya .jpg / .exe / .zip
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};
