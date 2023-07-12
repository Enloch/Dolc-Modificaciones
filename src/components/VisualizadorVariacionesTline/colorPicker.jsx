import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#BF6547");

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setColor(newColor);
  };

  const updateElementsColor = () => {
    const paragraphs = document.querySelectorAll("p");
    const svgs = document.querySelectorAll("svg");

    paragraphs.forEach((p) => {
      p.style.color = color;
    });

    svgs.forEach((svg) => {
      svg.style.stroke = color;
      svg.style.fill = color;
    });
  };

  return (
    <div>
      <label htmlFor='muestrario'>Color:</label>
      <input
        type='color'
        value={color}
        id='muestrario'
        onChange={handleColorChange}
        onBlur={updateElementsColor}
      />
      <p>Text example</p>
      <svg>{/* SVG elements */}</svg>
    </div>
  );
};

export default ColorPicker;
