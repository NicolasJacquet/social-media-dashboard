import React from "react";
import BaseBloc from "./base-bloc";
import StatEvolution from "./stat-evolution";
import getIcon from "./../utils/get-icon";
import css from "./../assets/styles/stats-bloc.module.scss";

const StatsBloc = ({ label, type, number, gain, lost }) => {
    const formattedNumber = new Intl.NumberFormat().format(number);

    return (
        <BaseBloc link='https://www.google.com'>
            <div className={css.section}>
                <h3 className={css.title}>{label}</h3>
                <img src={getIcon(type)} alt={type} />
            </div>
            <div className={css.section}>
                <p className={css.number}>{formattedNumber}</p>
                {gain && <StatEvolution number={gain} isPositive isPercent />}
                {lost && <StatEvolution number={lost} isPercent />}
            </div>
        </BaseBloc>
    );
};

export default StatsBloc;
