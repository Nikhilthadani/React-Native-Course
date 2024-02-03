import React from "react";

const EventExample = () => {
  return (
    <div>
      <button onClick={() => alert("Increment")}>Increment</button>
      <button onClick={() => alert("Decrement")}>Decrement</button>
    </div>
  );
};

export default EventExample;
