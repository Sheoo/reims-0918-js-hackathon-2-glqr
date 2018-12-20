import React from "react";
import Detail from "./Detail";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Details = ({ details, handleClick }) => (
  <Droppable droppableId="droppable">
    {(provided, snapshot) => (
      <div ref={provided.innerRef}>
        {details.map((detail, index) => (
          // rendre detail draggable avec detail.type comme draggable id
          <Draggable draggableId={detail.type} index={index} key={index}>
            {provided => (
              <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
                <Detail
                  detailLabel={detail.label}
                  detailType={detail.type}
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

export default Details;
