import React from "react";
import { Fade } from "react-reveal";

export default function FeaturedImage({ data }) {
  return (
    <section className="container">
      <div className="container-grid sm">
        {data.map((image, index) => {
          return (
            <div
              key={`FeaturedImage-${index}`}
              className={`item ${index > 0 ? "column-5" : "column-7"} ${
                index > 0 ? "row-1" : "row-2"
              }`}
            >
              <Fade
                bottom
                delay={300 * index}
              >
                <div className="card h-100">
                  <figure className="img-wrapper">
                    <img
                      src={`${process.env.REACT_APP_HOST}/${image.imageUrl}`}
                      alt={image.id}
                      className="img-cover"
                    />
                  </figure>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
}
