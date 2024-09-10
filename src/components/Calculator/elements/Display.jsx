import React from 'react';

const Display = ({expression, displayNumber}) => {
    return (
        <div className="calculator__display">
            <div className="calculator__expression">
                {expression}
            </div>
            <div className="calculator__result">
                {displayNumber}
            </div>
        </div>
    );
};

export default Display;