import React from "react";
import { Chip } from "@material-ui/core";

const Detail = ({ detailType, detailLabel, handleClick }) => (
  <Chip
    clickable
    color="primary"
    label={detailLabel}
    onClick={() => handleClick(detailType)}
  />
);

export default Detail;
