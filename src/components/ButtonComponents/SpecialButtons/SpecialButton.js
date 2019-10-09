import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="specialBtns" onClick={() => console.log(props.text)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.text}
    </button>
  );
};

export default SpecialButton