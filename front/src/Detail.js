import React from "react";
import { Chip } from "@material-ui/core";

const Detail = ({ detailLabel, detailType, handleClick }) => (
  <Chip
    clickable
    color="primary"
    label={detailLabel}
    onClick={() => handleClick(detailType)}
  />
);

export default Detail;
