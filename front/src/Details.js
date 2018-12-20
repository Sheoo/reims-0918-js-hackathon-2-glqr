import React from "react";
import Detail from "./Detail";

const Details = ({ details, handleClick }) => (
  <div>
    {details.map((detail, key) => (
      <Detail detailType={detail.type} detailLabel={detail.label} handleClick={handleClick} key={key} />
    ))}
  </div>
);

export default Details;
