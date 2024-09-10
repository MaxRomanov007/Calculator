import {maxCharactersCount} from "../../../../constants/constants.js";

const DotButton = (
    {
        icon = ".",
        left,
        right,
        setLeft,
        setRight,
        lastOperator,
        setDisplayNumber,
    }) => {

    const getDottedValue = (value) => {
        value = value.toString();
        if (new RegExp(/\.+/).test(value)) {
            return value;
        }
        return value + ".";
    }

    const dotLeftOperand = () => {
        setLeft(getDottedValue(left));
        setDisplayNumber(getDottedValue(left));
    }
    const dotRightOperand = () => {
        setRight(getDottedValue(right));
        setDisplayNumber(getDottedValue(right));
    }

    const numberButtonClick = () => {
        if (lastOperator === "" || lastOperator === "=") {
            if (left && left.length + 1 > maxCharactersCount) {
                return;
            }
            if (left === "0" || lastOperator === "=") {
                dotLeftOperand()
                return;
            }
            dotLeftOperand();
            return;
        }
        if (right && right.length + 1 > maxCharactersCount) {
            return;
        }
        if (right === "0") {
            dotRightOperand();
            return;
        }
        dotRightOperand();
    }
    return (
        <button className="calculator__button calculator__button--dot" onClick={numberButtonClick}>
            {icon}
        </button>
    );
};

export default DotButton;