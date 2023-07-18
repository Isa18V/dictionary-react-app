import React from "react";
import "../css/Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row containerPhotos">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <img
                  src={photo.src.landscape}
                  alt={photo.alt}
                  className="img-fluid"
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
