import {exponentialPrecision, maxPrecision} from "../constants/constants.js";

export const bracketIfNegativeOrExponential = (value) => {
    value = value.toString();
    if (value[0] === "-" || new RegExp(/\++/).test(value)) {
        return "(" + value + ")";
    }
    return value;
}
export const sliceInsignificantZeroes = (value) => {
    value = value.toString();
    if (new RegExp(/\.+/).test(value)) {
        return value.replace(/0+$/, "");
    }
    return value;
}
export const sliceSoleDot = (value) => {
    value = value.toString();
    if (new RegExp(/\.$/).test(value)) {
        return value.slice(0, -1);
    }
    return value;
}
export const toExponentialIfLong = (value) => {
    value = value.toString();
    if (value.length > maxPrecision) {
        return Number.parseFloat(value).toExponential(exponentialPrecision).toString();
    }
    return value;
}

export const formatNumberWithBracket = (value) => {
    value = sliceInsignificantZeroes(value);
    value = sliceSoleDot(value);
    value = toExponentialIfLong(value)
    value = bracketIfNegativeOrExponential(value);
    return value;
}

export const formatNumber = (value) => {
    value = sliceInsignificantZeroes(value);
    value = sliceSoleDot(value);
    value = toExponentialIfLong(value)
    return value;
}