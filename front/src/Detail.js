import React from "react";

const Detail = ({ detailLabel, detailPath }) => (
  <img className="image" src={detailPath} alt={detailLabel} />
);

export default Detail;
