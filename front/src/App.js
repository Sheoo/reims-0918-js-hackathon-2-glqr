import React, { Component } from "react";
// import { Grid, Paper } from "@material-ui/core";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./App.css";
import Details from "./Details";
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
    this.handleDetailClick = this.handleDetailClick.bind(this);
    this.handleInstallationClick = this.handleInstallationClick.bind(this);
    this.check = this.check.bind(this);
  }

  handleDetailClick(value) {
    this.setState({ detailSelected: value }, this.check);
  }
  handleInstallationClick(value) {
    this.setState({ installationSelected: value }, this.check);
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
  // on DragEnd : faire un setState de detailSelected ou de installationSelected selon l'id reçu
  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (destination) {
      console.log("destination :", destination);
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
      <DragDropContext
        onDragEnd={this.onDragEnd}
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
      >
        <Installations
          installations={this.state.installations}
          handleClick={this.handleInstallationClick}
        />
        <Droppable droppableId={this.state.column.droppable.id}>
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {console.log(this.state.column.droppable.tasks)}
              <h2>I am a droppable!</h2>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Details
          details={this.state.details}
          handleClick={this.handleDetailClick}
        />
      </DragDropContext>
    );
  }
}

export default App;
