import Button from "elements/Button";
import React from "react";
import { Fade } from "react-reveal";

export default function Activities({ data }) {
  if (data.length === 0) return null;
  return (
    <section className="container">
      <Fade bottom>
        <div className="mb-3 fw-semibold h4">Treasure to Choose</div>
        <div className="container-grid">
          {data.map((activity, index1) => {
            return (
              <div
                className="item column-3 row-1"
                key={`activity-${index1}`}
              >
                <Fade
                  bottom
                  delay={300 * index1}
                >
                  <div className="card">
                    {activity.isPopular && ( // kalo item itu popular tambahin "div.tag"
                      <div className="tag">
                        Popular <span className="fw-light">Choice</span>
                      </div>
                    )}
                    <figure
                      className="img-wrapper"
                      style={{ height: 180 }}
                    >
                      <img
                        src={`${process.env.REACT_APP_HOST}/${activity.imageUrl}`}
                        alt={activity.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        className=" text-dark text-decoration-none"
                      >
                        <h5 className="h4">{activity.name}</h5>
                      </Button>
                      <span
                        className="text-gray-500 fw-light"
                        style={{ color: "#b0b0b0" }}
                      >
                        {activity.type}
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
