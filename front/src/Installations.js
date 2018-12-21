import React from "react";
import Installation from "./Installation";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Installations = ({ installations }) => (
  <Droppable droppableId="droppableInstall">
    {(provided, snapshot) => (
      <div ref={provided.innerRef}>
        {installations.map((installation, index) => (
          // rendre installation draggable avec installation.id comme draggable id
          <Draggable draggableId={installation.id} index={index} key={index}>
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
      </div>
    )}
  </Droppable>
);
// installationLabel, installationPath
export default Installations;
