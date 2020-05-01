import React from "react";
import classnames from "classnames";
import iconUp from "./../assets/images/icon-up.svg";
import iconDown from "./../assets/images/icon-down.svg";
import css from "./../assets/styles/stat-evolution.module.scss";

const StatEvolution = ({ isPercent, isPositive, number }) => {
    const icon = isPositive ? iconUp : iconDown;
    const label = isPercent ? "%" : " Today";

    return (
        <div className={classnames(css.stat, { [css.positive]: isPositive })}>
            <img src={icon} alt='Icon' className={css.icon} />
            {number}
            {label}
        </div>
    );
};

export default StatEvolution;
