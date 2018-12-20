import React from "react";
import { Chip } from "@material-ui/core";

const Object = ({ objectName, objectId, handleClick }) => (
  <Chip
    clickable
    color="primary"
    label={objectName}
    onClick={() => handleClick(objectId)}
  />
);

export default Object;
