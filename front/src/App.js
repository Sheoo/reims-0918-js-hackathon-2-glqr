import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./App.css";
import Details from "./Details";
import Result from "./Result";
import Installations from "./Installations";
const data = require("./data.json");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: {
        droppable: {
          id: "droppableMerge",
          title: "merge",
          tasks: [undefined, undefined]
        }
      },
      detailSelected: null,
      details: data.details,
      installationSelected: null,
      installations: data.installations
    };
    this.check = this.check.bind(this);
  }

  check() {
    if (this.state.detailSelected && this.state.installationSelected) {
      let request = this.state.installations[
        this.state.installationSelected - 1
      ][this.state.detailSelected];
      alert(request);
      this.setState({ detailSelected: null, installationSelected: null });
    }
  }

  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    if (destination.droppableId === "droppableMerge") {
      isNaN(draggableId)
        ? this.setState({ detailSelected: draggableId }, this.check)
        : this.setState({ installationSelected: draggableId }, this.check);
    }
  };

  render() {
    return (
      <Grid container alignItems="center" style={{ height: "100%" }}>
        <Grid item xs={12}>
          <Paper elevation={4} style={{ margin: 32 }}>
            <DragDropContext
              onDragEnd={this.onDragEnd}
              onDragStart={this.onDragStart}
              onDragUpdate={this.onDragUpdate}
            >
              <Grid container justify="center">
                <Grid item xs={2}>
                  <Details details={this.state.details} />
                </Grid>
                <Grid item xs={8}>
                  <Droppable droppableId={this.state.column.droppable.id}>
                    {provided => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        style={{ height: "100%" }}
                      >
                        {/* {console.log(this.state.column.droppable.tasks)} */}
                        <Result
                          detailSelected={this.state.detailSelected}
                          installationSelected={this.state.installationSelected}
                          installations={this.state.installations}
                        />
                      </div>
                    )}
                  </Droppable>
                </Grid>
                <Grid item xs={2} style={{ textAlign: "right" }}>
                  <Installations installations={this.state.installations} />
                </Grid>
              </Grid>
            </DragDropContext>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default App;
