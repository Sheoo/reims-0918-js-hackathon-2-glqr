import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
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

  onDragEnd = result => {};

  render() {
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
      >
        <Grid container alignItems="center" style={{ height: "100%" }}>
          <Grid item xs={12}>
            <Paper elevation={4} style={{ margin: 32 }}>
              <Grid container justify="center">
                <Grid item xs={12} sm={6}>
                  <Objects
                    objects={this.state.objects}
                    handleClick={this.handleObjectClick}
                  />
                </Grid>
                <Droppable droppableId="droppable">
                  {provided => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      <h2>I am a droppable!</h2>
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>

                {/* créer la zone dropable Result >
                - si un détail est sélectionné, afficher le type de détail
                - si un object est sélectionné, afficher le name de l'object
                - si un détail & un object sont sélectionnés, afficher le type de l'object
                */}
                <Grid item xs={12} sm={6} style={{ textAlign: "right" }}>
                  <Details
                    details={this.state.details}
                    handleClick={this.handleDetailClick}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </DragDropContext>
    );
  }
}

export default App;
