import React from "react";
import Button from "elements/Button";
import BrandIcon from "parts/IconText";

export default function Header(props) {
  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbaar-light">
          <BrandIcon />
        </nav>
      </div>
    </header>
  );
}
