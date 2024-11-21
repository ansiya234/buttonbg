import React, { useState } from 'react';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const colors = ['blue', 'red', 'green'];

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: backgroundColor,
        height: '100vh',
        transition: 'background-color 0.5s',
        width: '100%',
      }}
    >
      <div className="d-flex gap-3">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => changeBackgroundColor(color)}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              backgroundColor: color,
              color: 'white',
              cursor: 'pointer',
            }}
            aria-label={`Change background to ${color}`}
          >
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
