import React, { Fragment } from "react";

const PotdInfo = ({ potd }) => {
  return (
    <section>
      <p>{potd.explanation}</p>
      <p>
        {potd.copyright}, {potd.date}
      </p>
    </section>
  );
};

export default PotdInfo;
