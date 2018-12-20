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

    this.handleDetail1Click = this.handleDetail1Click.bind(this);
    this.handleDetail2Click = this.handleDetail2Click.bind(this);

    this.handleObject1Click = this.handleObject1Click.bind(this);
    this.handleObject2Click = this.handleObject2Click.bind(this);

    this.check = this.check.bind(this);
  }

  handleDetail1Click() {
    this.setState({ detailSelected: "Event" }, this.check);
  }
  handleDetail2Click() {
    this.setState({ detailSelected: "Info" }, this.check);
  }

  handleObject1Click() {
    this.setState({ objectSelected: "Imprimante 3D" }, this.check);
  }
  handleObject2Click() {
    this.setState({ objectSelected: "Borne d'arcade" }, this.check);
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
                  id="event"
                  clickable
                  color="primary"
                  label="Event"
                  onClick={() => this.handleDetail1Click()}
                />
                <Chip
                  id="info"
                  clickable
                  color="primary"
                  label="Info"
                  onClick={() => this.handleDetail2Click()}
                />
                <Chip
                  clickable
                  color="primary"
                  label="Veeeryyy loooong Type 3"
                />
                <Chip clickable color="primary" label="Type 4" />
              </Grid>
              <Grid item xs={12} sm={6} style={{ textAlign: "right" }}>
                <Chip
                  id="print"
                  clickable
                  color="primary"
                  label="Imprimante 3D"
                  onClick={() => this.handleObject1Click()}
                />
                <Chip
                  id="arcade"
                  clickable
                  color="primary"
                  label="Borne d'arcade"
                  onClick={() => this.handleObject2Click()}
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
