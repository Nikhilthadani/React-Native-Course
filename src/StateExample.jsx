import { useState } from "react";

function App() {
  console.log("Rerendered");
  // let count = 0;
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    console.log("handleIncrement called");

    // Scenario
    // setCount(count + 1); // Batch => (0 + 1) = 1
    // setCount(count + 1); // Batch => (0 + 1) = 1
    // setCount(count + 1); // Batch => (0 + 1) = 1

    setCount((prev) => prev + 1); // Batch => (last + 1) = 1
    setCount((prev) => prev + 1); // Batch => (1 + 1) = 2
    setCount((prev) => prev + 1); // Batch => (2 + 1) = 3
  };

  return (
    <div>
      <div onClick={handleIncrement}>Click Me</div>
      <div>Count: {count}</div>
    </div>
  );
}

export default App;
