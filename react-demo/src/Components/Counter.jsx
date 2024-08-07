import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementedBy, setIncrementedBy] = useState(1);
  function increment() {
    setCount(count + incrementedBy);
  }
  function decrement() {
    setCount(count - incrementedBy);
  }
  function increaceIncrement() {
    setIncrementedBy(incrementedBy + 1);
  }
  function decreaceIncrement() {
    setIncrementedBy(incrementedBy - 1);
  }
  return (
    <div>
      <h1>Count is value:{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h1>We are incrementing value is:{incrementedBy}</h1>
      <button onClick={increaceIncrement}>Increace Increment</button>
      <button onClick={decreaceIncrement}>Decreace Increment</button>
    </div>
  );
}
