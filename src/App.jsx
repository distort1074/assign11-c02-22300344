import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    const value = e.target.name;
    setResult(result.concat(value));
  };

  const clear = () => {
    setResult("");
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  const toggleSign = () => {
    setResult((prevResult) => {
      const num = parseFloat(prevResult);
      if (isNaN(num)) {
        return prevResult;
      }
      return String(num * -1);
    });
  };

  const buttonStyle = "calculator-button";
  const buttonTopStyle = "calculator-button calculator-button-top";
  const buttonLeftStyle = "calculator-button calculator-button-operator";
  return (
    <>
      <div className="calculator-page">
        <h1 className="mb-4 text-center text-2xl font-bold text-white">오픈소스 과제 계산기</h1>
        <form className="calculator-form">
          <input
            type="text"
            value={result}
            readOnly
            aria-label="계산식과 결과"
            className="calculator-display"
          />
        </form>

        <div className="calculator-keypad">
          <button
            name="clear"
            onClick={clear}
            className={buttonTopStyle}
          >
            AC
          </button>
          <button
            name="toggleSign"
            onClick={toggleSign}
            className={buttonTopStyle}
          >
            +/-
          </button>
          <button
            name="%"
            onClick={handleClick}
            className={buttonTopStyle}
          >
            %
          </button>
          <button
            name="/"
            onClick={handleClick}
            className={buttonLeftStyle}
          >
            /
          </button>
          <button name="7" onClick={handleClick} className={buttonStyle}>
            7
          </button>
          <button name="8" onClick={handleClick} className={buttonStyle}>
            8
          </button>
          <button name="9" onClick={handleClick} className={buttonStyle}>
            9
          </button>
          <button
            name="*"
            onClick={handleClick}
            className={buttonLeftStyle}
          >
            ×
          </button>
          <button name="4" onClick={handleClick} className={buttonStyle}>
            4
          </button>
          <button name="5" onClick={handleClick} className={buttonStyle}>
            5
          </button>
          <button name="6" onClick={handleClick} className={buttonStyle}>
            6
          </button>
          <button
            name="-"
            onClick={handleClick}
            className={buttonLeftStyle}
          >
            -
          </button>
          <button name="1" onClick={handleClick} className={buttonStyle}>
            1
          </button>
          <button name="2" onClick={handleClick} className={buttonStyle}>
            2
          </button>
          <button name="3" onClick={handleClick} className={buttonStyle}>
            3
          </button>
          <button
            name="+"
            onClick={handleClick}
            className={buttonLeftStyle}
          >
            +
          </button>
          <button name="0" onClick={handleClick} className={buttonStyle}>
            0
          </button>
          <button name="." onClick={handleClick} className={buttonStyle}>
            .
          </button>

          <button
            id="result"
            onClick={calculate}
            className={`${buttonLeftStyle} col-span-2`}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
