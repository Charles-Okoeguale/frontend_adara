import React, { useState, useEffect } from 'react';

const TypewriterComponent = ({ text, fontSize, fontWeight, color, speed }) => {
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typewriterInterval = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.substring(0, index + 1));
        setIndex(index + 1);
      } else {
        clearInterval(typewriterInterval);
      }
    }, speed || 50);

    return () => clearInterval(typewriterInterval);
  }, [index, text, speed]);

  return (
    <p
      style={{
        fontSize: fontSize || '20px',
        fontWeight: fontWeight || 900,
        color: color || 'green',
      }}
    >
      {typedText}_ 
    </p>
  );
};

export default TypewriterComponent;

