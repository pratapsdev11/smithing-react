//demonstrating state management use state
import React, { useState } from 'react';

const Counter: React.FC = () => {
  // Using useState to manage count state
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl">Counter: {count}</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
        onClick={() => setCount(count + 1)} // Updating state
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
