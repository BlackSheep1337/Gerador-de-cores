import React, { useState, useEffect } from 'react';
import { rgbToHex } from './Utils';

export default function Color({ rgb, weight, index }) {
  const [showHex, setShowHex] = useState(false);
  const hex = rgbToHex(...rgb);

  const handleClick = () => {
    navigator.clipboard.writeText(hex);
    setShowHex(true);
  }

  useEffect(() => {
    const TWO_SECONDS = 2000;
    let timeout = setInterval(() => {
      setShowHex(false);
    }, TWO_SECONDS);
    return () => clearInterval(timeout);
  }, [showHex]);

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      onClick={ handleClick }
      style={{ backgroundColor: `rgb(${rgb})` }}
    >
      <p>{weight}%</p>
      <span>{showHex && 'cor copiada'}</span>
    </article>
  )
}
