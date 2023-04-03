import React from "react";
import parse from "html-react-parser";

export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h4>About the place</h4>
      {parse(`${data.description}`)}
      <div
        className="row"
        style={{ marginTop: 30 }}
      >
        {data.featuredId.map((feature, index) => {
          return (
            <div
              className="col-3"
              key={`feature-${index}`}
              style={{ marginBottom: 20 }}
            >
              <img
                src={`${process.env.REACT_APP_HOST}/${feature.imageUrl}`}
                alt={feature.name}
                width="38"
                className="d-block mb-2"
              />{" "}
              <span>{feature.qty}</span>{" "}
              <span className="text-gray-500 fw-light">{feature.name}</span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
