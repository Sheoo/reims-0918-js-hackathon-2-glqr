import React from "react";
import { Chip } from "@material-ui/core";

const Result = ({ detailSelected, installationSelected, installations }) => (
  <div>
    {detailSelected && !installationSelected && <Chip label={detailSelected} />}
    {installationSelected && !detailSelected && (
      <Chip label={installationSelected} />
    )}
    {detailSelected && installationSelected && (
      <Chip
        label={installations[installationSelected - 1][detailSelected]}
        onClick={() =>
          alert(installations[installationSelected - 1][detailSelected])
        }
      />
    )}
  </div>
);

export default Result;
