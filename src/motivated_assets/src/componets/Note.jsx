
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>hours{props.hours} minutes{props.minutes} seconds{props.seconds} </h1>


    </div>
  );
}

export default Note;