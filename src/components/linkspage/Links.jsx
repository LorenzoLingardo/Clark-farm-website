import React from "react";
import linksData from "../data/linksData";

const Links = () => {
  return (
    <div>
      <h1 className="fs-700" style={{ textAlign: "center" }}>
        Related Links
      </h1>
      {linksData.map((content) => {
        return (
          <div className="bg-white">
            <div className="m-3">
              <a
                style={{ textDecoration: "none" }}
                href={`/events/${content.id}`}
              >
                {
                  <img
                    style={{ "border-radius": "10px", "max-width": "400px" }}
                    src={content.eventImg}
                    alt=""
                  />
                }
              </a>
              <div>
                <h1 className="fs-500">{content.title}</h1>
              </div>
            </div>

            <h1 className="bg-dark text-light">{content.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Links;
