import React from 'react';
import Display from "./elements/Display.jsx";
import Numpad from "./elements/Numpad.jsx";
import {useRef, useState} from "preact/hooks";
import {maxCharactersCount} from "../../constants/constants.js";

const Calculator = () => {
    const [expression, setExpression] = useState("");
    const [displayNumber, setDisplayNumber] = useState("0");

    const buttons = [
        {
            icon: "x^2",
            text: "square",
            type: "oneOperand",
            callback: a => a * a,
        },
        {
            icon: "1/x",
            text: "1/",
            type: "oneOperand",
            callback: a => 1 / a,
        },
        {
            icon: "|x|",
            text: "mod",
            type: "oneOperand",
            callback: a => Math.abs(a),
        },
        {
            type: "clear",
        },
        {
            type: "clearAll",
        },
        {
            icon: "√",
            text: "√",
            type: "oneOperand",
            callback: a => Math.sqrt(a),
        },
        {
            icon: "n!",
            text: "fact",
            type: "oneOperand",
            callback: a => {
                function factorial(n) {
                    return n ? n * factorial(n - 1) : 1;
                }
                return factorial(a);
            },
        },
        {
            icon: "√",
            text: "√",
            type: "oneOperand",
            callback: a => Math.sqrt(a),
        },
        {
            icon: "ln",
            text: "ln",
            type: "oneOperand",
            callback: a => Math.log(a),
        },
        {
            icon: "7",
            type: "number",
        },
        {
            icon: "8",
            type: "number",
        },
        {
            icon: "9",
            type: "number",
        },
        {
            type: "zero",
        },
        {
            icon: "*",
            type: "twoOperand",
            callback: (a, b) => a * b,
        },
        {
            icon: "+",
            type: "twoOperand",
            callback: (a, b) => a + b,
        },
        {
            icon: "-",
            type: "twoOperand",
            callback: (a, b) => a - b,
        },
        {
            icon: "/",
            type: "twoOperand",
            callback: (a, b) => a / b,
        },
        {
            type: "equal",
        },
        {
            type: "negative",
        },
        {
            type: "dot",
        }
    ];

    return (
        <div className="calculator">
            <Display
                expression={expression}
                displayNumber={displayNumber}
            />
            <Numpad
                buttons={buttons}
                expression={expression}
                setExpression={setExpression}
                setDisplayNumber={setDisplayNumber}
            />
        </div>
    );
};

export default Calculator;