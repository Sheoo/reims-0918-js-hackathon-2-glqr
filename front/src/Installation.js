import React from "react";
import { Chip } from "@material-ui/core";

const Installation = ({ installationLabel, installationId, handleClick }) => (
  <Chip
    clickable
    color="primary"
    label={installationLabel}
    onClick={() => handleClick(installationId)}
  />
);

export default Installation;
