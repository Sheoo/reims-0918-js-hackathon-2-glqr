import React from "react";
import Object from "./Object";

const Objects = ({ objects, handleClick }) => (
  <div>
    {objects.map((object, key) => (
      <Object objectName={object.name} objectId={object.id} handleClick={handleClick} key={key} />
    ))}
  </div>
);

export default Objects;
