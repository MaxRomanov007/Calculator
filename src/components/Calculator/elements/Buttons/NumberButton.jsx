import {maxCharactersCount} from "../../../../constants/constants.js";

const NumberButton = (
    {
        icon,
        text = icon,
        left,
        right,
        setLeft,
        setRight,
        lastOperator,
        setLastOperator,
        setDisplayNumber,
        isPrevEqual,
        setIsPrevEqual,
    }) => {

    const isFloat = !Number.isInteger(Number.parseFloat(text));

    const setLeftOperand = (value) => {
        setLeft(value);
        setDisplayNumber(value);
    }
    const setRightOperand = (value) => {
        setRight(value);
        setDisplayNumber(value);
    }

    const numberButtonClick = () => {
        if (lastOperator === "" || isPrevEqual) {
            if (isFloat && left.search(/\.+/) !== -1) {
                return;
            }
            if (left.length + text.length > maxCharactersCount) {
                return;
            }
            if (left === "0" || isPrevEqual) {
                setLeftOperand(text);
                setIsPrevEqual(false);
                setLastOperator("");
                return;
            }
            setLeftOperand(left.toString().concat(text));
            return;
        }
        if (isFloat && right.search(/\.+/) !== -1) {
            return;
        }
        if (right && right.length + text.length > maxCharactersCount) {
            return;
        }
        if (right === "0") {
            setRightOperand(text);
            return;
        }
        setRightOperand(right.toString().concat(text));
    }

    return (
        <button className="calculator__button calculator__button--number" onClick={numberButtonClick}>
            {icon}
        </button>
    );
};

export default NumberButton;