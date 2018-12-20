import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import "./App.css";
import Details from "./Details";
import Objects from "./Objects";
const data = require("./data.json");

class App extends Component {
  // on DragEnd : faire un setState de detailSelected ou de objectSelected selon l'id reçu
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
              {/* créer la zone dropable Result >
                - si un détail est sélectionné, afficher le type de détail
                - si un object est sélectionné, afficher le name de l'object
                - si un détail & un object sont sélectionnés, afficher le type de l'object
                */}
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
