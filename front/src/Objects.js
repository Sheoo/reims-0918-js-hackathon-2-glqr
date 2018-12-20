import React from "react";
import Object from "./Object";

const Objects = ({ objects, handleClick }) => (
  <div>
    {objects.map((object, key) => (
      // rendre Object draggable avec object.id comme draggable id
      <Object
        objectLabel={object.name}
        objectId={object.id}
        handleClick={handleClick}
        key={key}
      />
    ))}
  </div>
);

export default Objects;
