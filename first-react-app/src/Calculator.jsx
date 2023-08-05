import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  {/* Setting Variables to hold user imputs. */}
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState('');

  {/* updatee state when input field changes. */}
    const handleNum1Change = (e) => {
        setNum1(e.target.value);
    };

    const handleNum2Change = (e) => {
        setNum2(e.target.value);
    };

    const handleOperatorChange = (e) => {
        setOperator(e.target.value);
    };

  {/* Function that calculates results. */}
    const handleSubmit = (e) => {
        e.preventDefault();
        let calculatedResult;
        switch (operator) {
        case '+':
            calculatedResult = Number(num1) + Number(num2);
            break;
        case '-':
            calculatedResult = Number(num1) - Number(num2);
            break;
        case '*':
            calculatedResult = Number(num1) * Number(num2);
            break;
        case '/':
            calculatedResult = Number(num1) / Number(num2);
            break;
        default:
            calculatedResult = 'Invalid operator';
        }
        setResult(calculatedResult);
    };

  {/* JSX Here. */}
    return (
        <div className="calculator">
        <form onSubmit={handleSubmit}>
            <div>
            <h2>Calculator Component</h2>
            </div>
            <div>
            {/* Input field for #1 */}
                <input
                    type="number"
                    placeholder="Enter the first number"
                    value={num1}
                    onChange={handleNum1Change}
                    required
                />
            </div>
            <div>
            {/* Operator selection */}
                <select value={operator} onChange={handleOperatorChange} required>
                    <option value="">Select Operator</option>
                    <option value="+">Addition</option>
                    <option value="-">Subtraction</option>
                    <option value="*">Multiplication</option>
                    <option value="/">Division</option>
                </select>
            </div>
            <div>
            {/* Input field for #2 */}
                <input
                    type="number"
                    placeholder="Enter the second number"
                    value={num2}
                    onChange={handleNum2Change}
                    required
                />
                </div>
            <button type="submit">Calculate</button>
        </form>
        <div className="result">
            {/* Displays the result */} 
            {result !== '' && <p>Result: {result}</p>}
        </div>
        </div>
    );
};

export default Calculator;
