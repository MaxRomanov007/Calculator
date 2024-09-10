import {
    formatNumber,
} from "../../../../utils/formatNumbers.js";

const EqualButton = (
    {
        icon = "=",
        left,
        right,
        setRight,
        lastOperator,
        setLastOperator,
        setExpression,
        setDisplayNumber,
        lastAction,
        setIsPrevEqual,
    }) => {

    const equalButtonClick = () => {
        if (lastOperator === "" || lastOperator === "=") {
            setDisplayNumber(formatNumber(left));
            return;
        }
        let value = left;
        if(lastOperator !== "" && right !== "0") {
            value = lastAction(left, right);
            setRight("0");
        }
        setLastOperator("=");
        setExpression("");
        setIsPrevEqual(true);
        setDisplayNumber(formatNumber(value));
    }
    return (
        <button className="calculator__button calculator__button--equal" onClick={equalButtonClick}>
            {icon}
        </button>
    );
};

export default EqualButton;