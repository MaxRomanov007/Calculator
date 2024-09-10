import React from 'react';

const ClearAllButton = (
    {
        icon = "AC",
        setLeft,
        setRight,
        setLastOperator,
        setExpression,
        setDisplayNumber,
        setLastAction,
    }) => {

    const clearAllButtonClick = () => {
        setExpression("");
        setDisplayNumber("0");
        setLeft("0");
        setRight("0");
        setLastOperator("");
        setLastAction(() => () => {});
    }

    return (
        <button className="calculator__button calculator__button--clear-all" onClick={clearAllButtonClick}>
            {icon}
        </button>
    );
};

export default ClearAllButton;