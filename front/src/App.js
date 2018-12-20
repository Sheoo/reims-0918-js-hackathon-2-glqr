import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import "./App.css";
import Details from "./Details";
import Objects from "./Objects";
const data = require("./data.json");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailSelected: null,
      details: data.details,
      objectSelected: null,
      objects: data.objects
    };
    this.handleDetailClick = this.handleDetailClick.bind(this);
    this.handleObjectClick = this.handleObjectClick.bind(this);
    this.check = this.check.bind(this);
  }

  handleDetailClick(value) {
    this.setState({ detailSelected: value }, this.check);
  }
  handleObjectClick(value) {
    this.setState({ objectSelected: value }, this.check);
  }
  check() {
    if (this.state.detailSelected && this.state.objectSelected) {
      let request = this.state.objects[this.state.objectSelected - 1][
        this.state.detailSelected
      ];
      alert(request);
      this.setState({ detailSelected: null, objectSelected: null });
    }
  }

  // style={{ display: "flex-box", flexDirection: "column" }}
  render() {
    return (
      <Grid container alignItems="center" style={{ height: "100%" }}>
        <Grid item xs={12}>
          <Paper elevation={4} style={{ margin: 32 }}>
            <Grid container justify="center">
              <Grid item xs={12} sm={6}>
                <Details
                  details={this.state.details}
                  handleClick={this.handleDetailClick}
                />
              </Grid>
              <Grid item xs={12} sm={6} style={{ textAlign: "right" }}>
                <Objects
                  objects={this.state.objects}
                  handleClick={this.handleObjectClick}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default App;
