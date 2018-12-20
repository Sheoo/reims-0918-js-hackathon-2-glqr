import React from "react";
import Detail from "./Detail";

const Details = ({ details, handleClick }) => (
  <div>
    {details.map((detail, key) => (
      <Detail detailLabel={detail.label} detailType={detail.type} handleClick={handleClick} key={key} />
    ))}
  </div>
);

export default Details;
