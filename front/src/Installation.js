import React from "react";
import { Chip } from "@material-ui/core";

const Installation = ({ installationLabel }) => (
  <Chip
    clickable
    color="primary"
    label={installationLabel}
  />
);

export default Installation;
