import React from "react";
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>Working on {props.goal}!!! </h1>


    </div>
  );
}

export default Note;