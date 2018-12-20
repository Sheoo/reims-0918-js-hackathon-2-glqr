import React from "react";
import Object from "./Object";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Objects = ({ objects, handleClick }) => (
  <Droppable droppableId="droppable">
    {(provided, snapshot) => (
      <div ref={provided.innerRef}>
        {objects.map((object, index) => (
          // rendre Object draggable avec object.id comme draggable id
          <Draggable draggableId={object.id} index={index} key={index}>
            {provided => (
              <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
                <Object
                  objectLabel={object.name}
                  objectId={object.id}
                  handleClick={handleClick}
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

export default Objects;
