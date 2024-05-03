import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (event, input) => {
    const { value } = event.target;
    if (input === 1) {
      setInput1(value);
    } else {
      setInput2(value);
    }
  };

  const handleOperationClick = (op) => {
    setOperation(op);
  };

  const handleCalculateClick = () => {
    let res;
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    switch (operation) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case '×':
        res = num1 * num2;
        break;
      case '÷':
        res = num1 / num2;
        break;
      default:
        res = '';
        break;
    }
    setResult(res);
  };

  return (
    <div className="calculator">
      <div className="input-fields">
        <input
          type="number"
          value={input1}
          onChange={(e) => handleInputChange(e, 1)}
          placeholder="Enter number"
        />
        <input
          type="number"
          value={input2}
          onChange={(e) => handleInputChange(e, 2)}
          placeholder="Enter number"
        />
      </div>
      <div className="buttons">
        <button onClick={() => handleOperationClick('+')}>+</button>
        <button onClick={() => handleOperationClick('-')}>-</button>
        <button onClick={() => handleOperationClick('×')}>×</button>
        <button onClick={() => handleOperationClick('÷')}>÷</button>
        <button className="calculate-button" onClick={handleCalculateClick}>Calculate</button>
      </div>
      {result !== '' && <div className="result">Result: {result}</div>}
    </div>
  );
};

export default Calculator;
