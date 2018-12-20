import React from "react";
import Detail from "./Detail";

const Details = ({ details, handleClick }) => (
  <div>
    {details.map((detail, key) => (
      // rendre detail draggable avec detail.type comme draggable id
      <Detail
        detailLabel={detail.label}
        detailType={detail.type}
        handleClick={handleClick}
        key={key}
      />
    ))}
  </div>
);

export default Details;
