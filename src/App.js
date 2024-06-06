
import React, { useState } from "react";


const App = () => {
  let [count, setcount] = useState(0);

  const [color, setcolor] = useState("red");

  return (
    <div className="col-3 mx-auto">
      <h1>{count}</h1>
      <button onClick={() => setcount(count + 1)}>+</button>
      <button onClick={() => setcount(count - 1)}>-</button>

    </div>
  );
};

export default App;

