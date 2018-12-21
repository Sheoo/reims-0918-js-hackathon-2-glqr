import React from "react";
import { Chip } from "@material-ui/core";

const Detail = ({ detailLabel }) => (
  <Chip
    clickable
    color="primary"
    label={detailLabel}
  />
);

export default Detail;
