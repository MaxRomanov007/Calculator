import React from 'react';
import {maxCharactersCount} from "../../../../constants/constants.js";

const ZeroButton = (
    {
        icon = "0",
        left,
        right,
        setLeft,
        setRight,
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

    const zeroButtonClick = () => {
        if (lastOperator === "" || lastOperator === "=") {
            if (left && left.length + 1 > maxCharactersCount) {
                return;
            }
            if (left === "0" || lastOperator === "=") {
                setLeftOperand("0.0")
                return;
            }
            setLeftOperand(left.toString().concat("0"));
            return;
        }
        if (right && right.length + 1 > maxCharactersCount) {
            return;
        }
        if (right === "0") {
            setRightOperand("0.0");
            return;
        }
        setRightOperand(right.toString().concat("0"));
    }
    return (
        <button className="calculator__button calculator__button--zero" onClick={zeroButtonClick}>
            {icon}
        </button>
    );
};

export default ZeroButton;