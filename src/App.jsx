import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const handleClick = (e) => {
    const value = e.target.name;
    setResult((previous) => previous === "Error" ? value : previous + value);
  };

  const clear = () => {
    setResult("");
  };

  const calculate = () => {
    if (result.trim() === "") return;

    try {
      const answer = eval(result);
      if (!Number.isFinite(answer)) {
        setResult("Error");
        return;
      }
      setResult(String(answer));
      setHistory((previous) => [
        ...previous,
        { expression: result, answer: String(answer) },
      ]);
    } catch {
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
        <div className="calculator-form">
          <input
            type="text"
            value={result}
            readOnly
            aria-label="계산식과 결과"
            className="calculator-display"
          />
        </div>

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

        <section className="calculator-history" aria-labelledby="history-title">
          <div className="history-heading">
            <h2 id="history-title">계산 기록</h2>
            <button
              className="history-clear"
              onClick={() => setHistory([])}
              disabled={history.length === 0}
            >
              기록 지우기
            </button>
          </div>
          {history.length === 0 ? (
            <p className="history-empty">계산하면 여기에 기록이 표시됩니다.</p>
          ) : (
            <ol className="history-list" aria-live="polite">
              {history.map((item, index) => (
                <li key={index}>
                  <span>{item.expression} =</span>
                  <strong>{item.answer}</strong>
                </li>
              ))}
            </ol>
          )}
        </section>
      </div>
    </>
  );
}

export default App;
