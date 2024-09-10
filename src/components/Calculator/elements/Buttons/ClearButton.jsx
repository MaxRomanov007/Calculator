import React from 'react';

const ClearButton = (
    {
        icon = "C",
        left,
        right,
        setLeft,
        setRight,
        setExpression,
        lastOperator,
        setDisplayNumber,
    }) => {

    const setLeftOperand = (value) => {
        setLeft(value);
        setDisplayNumber(value);
    }
    const setRightOperand = (value) => {
        setRight(value);
        setDisplayNumber(value);
    }

    const clearButtonClick = () => {
        if (lastOperator === "=") {
            setLeftOperand("0");
            setExpression("");
            return;
        }
        if (lastOperator === "") {
            if (left === "0") {
                return;
            }
            if (left.toString().length === 1 || left.toString().length === 2 && left.toString()[0] === "-") {
                setLeftOperand("0");
                return;
            }
            setLeftOperand(left.toString().slice(0, -1));
            return;
        }
        if(right === "0") {
            return;
        }
        if (right.length === 1 || right.length === 2 && right[0] === "-") {
            setRightOperand("0");
            return;
        }
        setRightOperand(right.toString().slice(0, -1));
    }

    return (
        <button className="calculator__button calculator__button--clear" onClick={clearButtonClick}>
            {icon}
        </button>
    );
};

export default ClearButton;