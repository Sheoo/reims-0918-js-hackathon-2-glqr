import React from "react";

const Installation = ({ installationLabel, installationPath }) => (
  <img className="image" src={installationPath} alt={installationLabel} />
);

export default Installation;
