import React from "react";
import { Chip } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

const Detail = ({ detailLabel, detailPath }) => (
  <img src={detailPath} />
  // <Chip
  //   clickable
  //   color="primary"
  //   avatar={<Avatar alt={detailLabel} src={detailPath} />}
  // />
);

export default Detail;
