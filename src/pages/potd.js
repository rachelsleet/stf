import React, { Fragment } from "react";
import PotdInfo from "../components/potd-info";
import "./potd.scss";

const POTD = ({ potd }) => {
  return (
    <div className="potd-info">
      <h3 className="potd-title">{potd.title}</h3>
      {potd.media_type === "image" ? (
        <img
          src={potd.hdurl}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            overflow: "visible"
          }}
          alt={potd.title}
        />
      ) : (
        <iframe src={potd.url} width={560} height={315} title={potd.title} />
      )}
      <section className="potd-description">
        <p>{potd.explanation}</p>
        <p>
          {potd.copyright}, {potd.date}
        </p>
      </section>
    </div>
  );
};

export default POTD;
