import {
    formatNumberWithBracket,
    toExponentialIfLong
} from "../../../../utils/formatNumbers.js";

const TwoOperandButton = (
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
        expression,
        setExpression,
        setDisplayNumber,
        lastAction,
        setLastAction,
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
    const updateExpression = () => {
        if (lastOperator === "" || lastOperator === "=") {
            setExpression(expression + formatNumberWithBracket(left) + text);
            return;
        }
        setExpression(expression + formatNumberWithBracket(right) + text);
    };
    const restartExpression = (value, char) => {
        setExpression(formatNumberWithBracket(value) + char);
    }

    const twoOperandButtonClick = () => {
        let result = left;
        if (lastOperator !== "" && right !== "0") {
            result = lastAction(left, right);
            updateExpression();
            setRight("0");
        }
        if (lastOperator !== text) {
            restartExpression(result, text);
        }
        setLastAction(() => (left, right) => {
            const result = callback(Number(left), Number(right));
            if (!isFinite(result)) {
                errorMessage();
                return 0;
            }
            setLeftOperand(result);
            return result;
        });
        setLastOperator(text);
    }
    return (
        <button className="calculator__button calculator__button--two-operand" onClick={twoOperandButtonClick}>
            {icon}
        </button>
    );
};

export default TwoOperandButton;