
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
        setLastAction
    }) => {

    const errorMessage = () => {
        setExpression("");
        setDisplayNumber("0");
        setLeft("0");
        setRight("0");
        setLastOperator("");
        setLastAction(() => () => {});
        alert("Ошибка!");
    }

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
        const result = callback(Number(value));
        if (!isFinite(result)) {
            errorMessage();
            return;
        }
        setLeftOperand(result);
    }

    return (
        <button className="calculator__button calculator__button--one-operand" onClick={oneOperandButtonClick}>
            {icon}
        </button>
    );
};

export default OneOperandButton;