import React from 'react';

const NegativeButton = (
    {
        icon = "+/-",
        left,
        right,
        setLeft,
        setRight,
        lastOperator,
        setDisplayNumber,
    }) => {

    const invertNumber = (value) => {
        value = value.toString();
        if (value === "0") {
            return "0";
        }
        if (value[0] === "-") {
            return value.slice(1);
        }
        return "-" + value;
    }

    const setLeftOperandInvert = () => {
        setLeft(invertNumber(left));
        setDisplayNumber(invertNumber(left));
    }
    const setRightOperandInvert = () => {
        setRight(invertNumber(right));
        setDisplayNumber(invertNumber(right));
    }

    const negativeButtonClick = () => {
        if (lastOperator === "=" || lastOperator === "") {
            setLeftOperandInvert();
            return;
        }
        setRightOperandInvert();
    }

    return (
        <button className="calculator__button calculator__button--negative" onClick={negativeButtonClick}>
            {icon}
        </button>
    );
};

export default NegativeButton;