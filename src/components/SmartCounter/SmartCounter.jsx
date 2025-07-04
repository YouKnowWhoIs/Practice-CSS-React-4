import { useEffect, useState } from "react";
import "../../style/smartCounter/smartCounter.css";

function SmartCounter() {
  const [counter, setCounter] = useState(0);
  const [isHighValue, setIsHighValue] = useState(false);

  const handleBtnMinus = () => {
    setTimeout(() => {
      setCounter((prev) => prev - 1);
    }, 500);
  };

  const handleBtnPlus = () => {
    setTimeout(() => {
      setCounter((prev) => prev + 1);
    }, 500);
  };

  let color;

  if (counter > 0) {
    color = "green";
  } else if (counter < 0) {
    color = "red";
  } else {
    color = "gray";
  }

  const handleRandomReset = () => {
    setTimeout(() => {
      let randomNum = Math.floor(Math.random() * 20);

      setCounter(randomNum);
    }, 500);
  };

  useEffect(() => {
    if (counter > 10) {
      setIsHighValue(true);
    } else {
      setIsHighValue(false);
    }
  }, [counter]);

  return (
    <>
      <div id="smartCounter">
        <div className="conteinerCounter">
          <button type="button" onClick={handleBtnMinus}>
            -
          </button>
          <p style={{ color: color }}>{counter}</p>
          <button type="button" onClick={handleBtnPlus}>
            +
          </button>
        </div>

        {isHighValue && <p className="showText">Високе значення!</p>}

        <div className="conteinerBtn">
          <button type="button" onClick={handleRandomReset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default SmartCounter;
