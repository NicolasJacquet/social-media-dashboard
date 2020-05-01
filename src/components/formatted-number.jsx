import React, { Fragment } from "react";

const locale = (navigator && navigator.language) || "en-US";

const FormattedNumber = ({ number }) => {
    if (number >= 1000000000) {
        return formatNumber(number, 1000000000, "G");
    } else if (number >= 1000000) {
        return formatNumber(number, 1000000, "M");
    } else if (number >= 10000) {
        return formatNumber(number, 1000, "K");
    }

    return <Fragment>{new Intl.NumberFormat(locale).format(number)}</Fragment>;
};

export default FormattedNumber;

const NARROW_NON_BREAKING_SPACE = "\u202F";
const formatNumber = (num, divider, letter) => {
    return (
        <Fragment>
            {new Intl.NumberFormat(locale, {
                maximumSignificantDigits: 2,
            }).format(Math.floor(num / divider))}
            {NARROW_NON_BREAKING_SPACE}
            {letter}
        </Fragment>
    );
};
