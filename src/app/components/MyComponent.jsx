import React, { useState, useEffect } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Esegui questa funzione quando il componente viene montato
    console.log("Component mounted");

    // Esegui questa funzione quando il componente viene smontato
    return () => {
      console.log("Component unmounted");
    };
  }, []); // L'array vuoto [] indica che questo effetto è equivalente a componentDidMount

  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Increment Count
      </button>
    </div>
  );
};

export default MyComponent;
