import React from "react";
import Installation from "./Installation";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Grid } from "@material-ui/core";
const Installations = ({ installations }) => (
  <Droppable droppableId="droppableInstall">
    {(provided, snapshot) => (
      <div ref={provided.innerRef}>
        <Grid container>
          <Grid xs={6}>
            {installations.slice(0, 4).map((installation, index) => (
              // rendre installation draggable avec installation.id comme draggable id
              <Draggable
                draggableId={installation.id}
                index={index}
                key={index}
              >
                {provided => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <Installation
                      installationLabel={installation.name}
                      installationPath={installation.path}
                      index={index}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Grid>
          <Grid xs={6}>
            {installations.slice(4, 8).map((installation, index) => (
              // rendre installation draggable avec installation.id comme draggable id
              <Draggable
                draggableId={installation.id}
                index={index}
                key={index}
              >
                {provided => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <Installation
                      installationLabel={installation.name}
                      installationPath={installation.path}
                      index={index}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Grid>
        </Grid>
      </div>
    )}
  </Droppable>
);

export default Installations;
