import React from 'react';
import {exponentialPrecision, maxPrecision} from "../../../../constants/constants.js";
import {
    formatNumber,
    toExponentialIfLong
} from "../../../../utils/formatNumbers.js";

const OneOperandButton = (
    {
        icon,
        text = icon,
        callback,
        left,
        right,
        setLeft,
        setRight,
        lastOperator,
        setLastOperator,
        setExpression,
        setDisplayNumber,
        lastAction,
    }) => {

    const setLeftOperand = (value) => {
        setLeft(value);
        setDisplayNumber(toExponentialIfLong(value));
    }
    const restartExpression = (value) => {
        setExpression(text + "(" + formatNumber(value) + ")")
    }

    const oneOperandButtonClick = () => {
        if (left === "0") {
            return;
        }
        setLastOperator(text);
        let value = left;
        if(lastOperator !== "" && right !== "0") {
            value = lastAction(left, right);
            setRight("0");
        }
        restartExpression(value);
        setLeftOperand(callback(Number(value)));
    }

    return (
        <button className="calculator__button calculator__button--one-operand" onClick={oneOperandButtonClick}>
            {icon}
        </button>
    );
};

export default OneOperandButton;