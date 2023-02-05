import React from "react";

import ImageHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.jpg";

import Button from "elements/Button";

import formatNumber from "utils/formatNumber";
import { Fade } from "react-reveal";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }
  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-items-center">
          {/* Kiri */}
          <div
            className="col-auto pr-5"
            style={{ width: 530 }}
          >
            <h1 className="fw-bold line-height-1 mb-3">
              Forget Busy Work, <br />
              Start Next Vacation
            </h1>
            <p
              className="mb-4 fw-light text-gray-500 w-75"
              style={{ lineHeight: "170%", color: "#b0b0b0" }}
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>

            <div
              className="row"
              style={{ marginTop: 80 }}
            >
              <div
                className="col-auto"
                style={{ marginRight: 35 }}
              >
                <img
                  width="36"
                  height="36"
                  src="/images/icon-traveler.svg"
                  alt={`${props.data.travelers} Travelers`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.travelers)}{" "}
                  <span className="text-gray-500 fw-light">travelers</span>
                </h6>
              </div>
              <div
                className="col-auto"
                style={{ marginRight: 35 }}
              >
                <img
                  width="36"
                  height="36"
                  src="/images/icon-treasure.svg"
                  alt={`${props.data.treasures} Treasures`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.treasures)}{" "}
                  <span className="text-gray-500 fw-light">treasures</span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  width="36"
                  height="36"
                  src="/images/icon-cities.svg"
                  alt={`${props.data.cities} Cities`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.cities)}{" "}
                  <span className="text-gray-500 fw-light">cities</span>
                </h6>
              </div>
            </div>
          </div>
          {/* Kanan */}
          <div className="col-6 pl-5 justify-content-end">
            <div style={{ width: 520, height: 410 }}>
              <img
                src={ImageHero}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{
                  // margin: "-20px 0 0 -20px",
                  zIndex: 1,
                  width: 520,
                  height: 410,
                }}
              />
              <img
                src={ImageHero_}
                alt="Room with couches frame"
                className="img-fluid position-absolute"
                style={{ margin: "40px 0 0 40px", width: 520, height: 410 }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
