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
        ? this.setState({ detailSelected: draggableId })
        : this.setState({ installationSelected: draggableId });
    }
  };

  render() {
    return (
      <Grid container style={{ height: "100%" }}>
        <Grid container justify="center">
          <img style={{ margin: "20px" }} src="icons/logo.png" />
        </Grid>
        <Grid item xs={12}>
          <DragDropContext
            onDragEnd={this.onDragEnd}
            onDragStart={this.onDragStart}
            onDragUpdate={this.onDragUpdate}
          >
            <Grid container justify="center">
              <Grid
                className="border"
                item
                xs={2}
                style={{ textAlign: "center", backgroundColor: "#005F82" }}
              >
                <Details details={this.state.details} />
              </Grid>
              <Grid item xs={6}>
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
                        details={this.state.details}
                        installationSelected={this.state.installationSelected}
                        installations={this.state.installations}
                      />
                    </div>
                  )}
                </Droppable>
              </Grid>
              <Grid
                className="border"
                item
                xs={4}
                style={{ textAlign: "center", backgroundColor: "#EF914B" }}
              >
                <Installations installations={this.state.installations} />
              </Grid>
            </Grid>
          </DragDropContext>
        </Grid>
      </Grid>
    );
  }
}

export default App;
