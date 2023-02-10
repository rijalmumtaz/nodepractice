import React from "react";
import Button from "elements/Button";
import BrandIcon from "parts/IconText";
import { Fade } from "react-reveal";
import { useLocation } from "react-router-dom";

export default function Header(props) {
  const location = useLocation();
  const getNavLinkClass = (path) => {
    return location.pathname === path ? " active" : "";
  };
  // console.log("pathname", location.pathname);

  //aku mau commit

  if (props.isCentered) {
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <div className="navbar navbar-expand-lg navbar-lg">
              <Button
                className="brand-text-logo mx-auto"
                href=""
                type="link"
              >
                Stay<span className="text-gray-900">cation.</span>
              </Button>
            </div>
          </div>
        </header>
      </Fade>
    );
  }

  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <BrandIcon />
            <div className="collapse navbar-collapse justify-content-end">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item${getNavLinkClass("/")}`}>
                  <Button
                    className="nav-link"
                    type="link"
                    href="/"
                  >
                    Home
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                  <Button
                    className="nav-link"
                    type="link"
                    href="/browse-by"
                  >
                    Browse By
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/stories")}`}>
                  <Button
                    className="nav-link"
                    type="link"
                    href="/stories"
                  >
                    Stories
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/agents")}`}>
                  <Button
                    className="nav-link"
                    type="link"
                    href="/agents"
                  >
                    Agents
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
