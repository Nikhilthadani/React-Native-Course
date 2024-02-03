import React, { useEffect, useState } from "react";

const EffectExample = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //subscribe
    console.log("SUBCSCRIBED");

    return () => {
      // cleanup
      console.log("UN-SUBCSCRIBED");
    };
  }, [count]);

  return (
    <div>
      <article>Count: {count}</article>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default EffectExample;
