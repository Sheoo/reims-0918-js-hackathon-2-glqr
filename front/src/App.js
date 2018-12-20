import React, { Component } from "react";
import { Grid, Paper, Chip } from "@material-ui/core";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailSelected: null,
      objectSelected: null
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
      alert(`${this.state.detailSelected}.${this.state.objectSelected}`);
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
                <Chip
                  clickable
                  color="primary"
                  label="Event"
                  onClick={() => this.handleDetailClick("event")}
                />
                <Chip
                  clickable
                  color="primary"
                  label="Info"
                  onClick={() => this.handleDetailClick("info")}
                />
                <Chip
                  clickable
                  color="primary"
                  label="Explications"
                  onClick={() => this.handleDetailClick("explications")}
                />
                <Chip
                  clickable
                  color="primary"
                  label="Photos"
                  onClick={() => this.handleDetailClick("photos")}
                />
              </Grid>
              <Grid item xs={12} sm={6} style={{ textAlign: "right" }}>
                <Chip
                  clickable
                  color="primary"
                  label="Imprimante 3D"
                  onClick={() => this.handleObjectClick("print")}
                />
                <Chip
                  clickable
                  color="primary"
                  label="Borne d'arcade"
                  onClick={() => this.handleObjectClick("arcade")}
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
