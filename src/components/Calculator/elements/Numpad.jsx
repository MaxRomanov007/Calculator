import React from 'react';
import NumberButton from "./Buttons/NumberButton.jsx";
import {useState} from "preact/hooks";
import EqualButton from "./Buttons/EqualButton.jsx";
import OneOperandButton from "./Buttons/OneOperandButton.jsx";
import TwoOperandButton from "./Buttons/TwoOperandButton.jsx";
import ClearButton from "./Buttons/ClearButton.jsx";
import ClearAllButton from "./Buttons/ClearAllButton.jsx";
import NegativeButton from "./Buttons/NegativeButton.jsx";
import DotButton from "./Buttons/DotButton.jsx";
import ZeroButton from "./Buttons/ZeroButton.jsx";

const Numpad = ({buttons, expression, setExpression, setDisplayNumber}) => {
    const [left, setLeft] = useState("0");
    const [right, setRight] = useState("0");
    const [lastAction, setLastAction] = useState(() => () => {});
    const [lastOperator, setLastOperator] = useState("");
    const [isPrevEqual, setIsPrevEqual] = useState(false);
    
    const props = {
        left: left,
        setLeft: setLeft,
        right: right,
        setRight: setRight,
        lastAction: lastAction,
        setLastAction: setLastAction,
        lastOperator: lastOperator,
        setLastOperator: setLastOperator,
        setDisplayNumber: setDisplayNumber,
        expression: expression,
        setExpression: setExpression,
        isPrevEqual: isPrevEqual,
        setIsPrevEqual: setIsPrevEqual,
    }

    return (
        <div className="calculator__numpad">
            {buttons.map((button) => {
                switch (button.type) {
                    case "number":
                        return (
                            <NumberButton key={button.icon} {...props} {...button}/>
                        )
                    case "equal":
                        return (
                            <EqualButton key={button.icon} {...props} {...button}/>
                        )
                    case "oneOperand":
                        return (
                            <OneOperandButton key={button.icon} {...props} {...button}/>
                        )
                    case "twoOperand":
                        return (
                            <TwoOperandButton key={button.icon} {...props} {...button}/>
                        )
                    case "clear":
                        return (
                            <ClearButton key={button.icon} {...props} {...button}/>
                        )
                    case "clearAll":
                        return (
                            <ClearAllButton key={button.icon} {...props} {...button}/>
                        )
                    case "negative":
                        return (
                            <NegativeButton key={button.icon} {...props} {...button}/>
                        )
                    case "dot":
                        return (
                            <DotButton key={button.icon} {...props} {...button}/>
                        )
                    case "zero":
                        return (
                            <ZeroButton key={button.icon} {...props} {...button}/>
                        )
                }
            })}
        </div>
    );
};

export default Numpad;