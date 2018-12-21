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
        {detailSelected === "picture" ? (
          <img
            style={{ width: "100%" }}
            src={installations[installationSelected - 1].picture}
          />
        ) : (
          <div>
            <h2>{installations[installationSelected - 1][detailSelected]}</h2>
            {/* alert(installations[installationSelected - 1][detailSelected]) */}
          </div>
        )}
        <img src={getInstallation(installations, installationSelected).path} />
      </Paper>
    )}
  </div>
);

export default Result;
