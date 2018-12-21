import React from "react";
import { Chip } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const getDetail = (details, detailSelected) =>
  details.find(detail => detail.id === detailSelected);

const getInstallation = (installations, installationSelected) =>
  installations.find(installation => installation.id === installationSelected);

const Result = ({
  detailSelected,
  details,
  installationSelected,
  installations
}) => (
  <div>
    {detailSelected && !installationSelected && (
      <img src={getDetail(details, detailSelected).path} />
    )}
    {installationSelected && !detailSelected && (
      <img src={getInstallation(installations, installationSelected).path} />
    )}
    {detailSelected && installationSelected && (
      <Paper>
        {(detailSelected === "picture") ? <img src={installations[installationSelected - 1].picture} />
         : <Typography>
         {installations[installationSelected - 1][detailSelected]}
         {/* alert(installations[installationSelected - 1][detailSelected]) */}
       </Typography>}
        <img src={getInstallation(installations, installationSelected).path} />
      </Paper>
    )}
  </div>
);

export default Result;
