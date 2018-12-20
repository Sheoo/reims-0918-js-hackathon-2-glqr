import React from "react";
import { Chip } from "@material-ui/core";

const Object = ({ objectLabel, objectId, handleClick }) => (
  <Chip
    clickable
    color="primary"
    label={objectLabel}
    onClick={() => handleClick(objectId)}
  />
);

export default Object;
