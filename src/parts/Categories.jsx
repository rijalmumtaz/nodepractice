import Button from "elements/Button";
import React from "react";
import { Fade } from "react-reveal";

export default function Categories({ data }) {
  return data.map((category, index1) => {
    if (category.itemId.length === 0) return null;
    return (
      <section
        className="container"
        key={`category-${index1}`}
      >
        <Fade bottom>
          <div className="mb-3 fw-semibold h4">{category.name}</div>
          <div className="container-grid">
            {category.itemId.map((item, index2) => {
              return (
                <div
                  className="item column-3 row-1"
                  key={`category-${index1}-item-${index2}`}
                >
                  <Fade
                    bottom
                    delay={300 * index2}
                  >
                    <div className="card">
                      {item.isPopular && ( // kalo item itu popular tambahin "div.tag"
                        <div className="tag">
                          Popular <span className="fw-light">Choice</span>
                        </div>
                      )}
                      <figure
                        className="img-wrapper"
                        style={{ height: 180 }}
                      >
                        <img
                          src={
                            item.imageId[0]
                              ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
                              : ""
                          }
                          alt={item.name}
                          className="img-cover"
                        />
                      </figure>
                      <div className="meta-wrapper">
                        <Button
                          type="link"
                          href={`properties/${item.id}`}
                          className="stretched-link d-block text-dark text-decoration-none"
                        >
                          <h5 className="h4">{item.title}</h5>
                        </Button>
                        <span
                          className="text-gray-500 fw-light"
                          style={{ color: "#b0b0b0" }}
                        >
                          {item.city}, {item.country}
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
  });
}
