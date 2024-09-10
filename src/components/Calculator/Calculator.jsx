import Display from "./elements/Display.jsx";
import Numpad from "./elements/Numpad.jsx";
import {useState} from "preact/hooks";

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
            type: "oneOperand",
            callback: a => Math.sqrt(a),
        },
        {
            icon: "log10",
            type: "oneOperand",
            callback: a => Math.log10(a),
        },
        {
            icon: "ln",
            type: "oneOperand",
            callback: a => Math.log(a),
        },
        {
            icon: "/",
            type: "twoOperand",
            callback: (a, b) => a / b,
        },
        {
            icon: "sin",
            type: "oneOperand",
            callback: a => Math.sin(a),
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
            icon: "*",
            type: "twoOperand",
            callback: (a, b) => a * b,
        },
        {
            icon: "cos",
            type: "oneOperand",
            callback: a => Math.cos(a),
        },
        {
            icon: "4",
            type: "number",
        },
        {
            icon: "5",
            type: "number",
        },
        {
            icon: "6",
            type: "number",
        },
        {
            icon: "-",
            type: "twoOperand",
            callback: (a, b) => a - b,
        },
        {
            icon: "tg",
            type: "oneOperand",
            callback: a => Math.tan(a),
        },
        {
            icon: "1",
            type: "number",
        },
        {
            icon: "2",
            type: "number",
        },
        {
            icon: "3",
            type: "number",
        },
        {
            icon: "+",
            type: "twoOperand",
            callback: (a, b) => a + b,
        },
        {
            icon: "ctg",
            type: "oneOperand",
            callback: a => 1 / Math.tan(a),
        },
        {
            type: "negative",
        },
        {
            type: "zero",
        },
        {
            type: "dot",
        },
        {
            type: "equal",
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