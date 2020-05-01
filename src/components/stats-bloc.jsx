import React from "react";
import BaseBloc from "./base-bloc";
import StatEvolution from "./stat-evolution";
import iconInstagram from "./../assets/images/icon-instagram.svg";
import css from "./../assets/styles/stats-bloc.module.scss";

const StatsBloc = () => {
    return (
        <BaseBloc link='https://www.google.com'>
            <div className={css.section}>
                <h3 className={css.title}>Pages views</h3>
                <img src={iconInstagram} alt='Instagram' />
            </div>
            <div className={css.section}>
                <p className={css.number}>43</p>
                <StatEvolution number={12} isPercent />
            </div>
        </BaseBloc>
    );
};

export default StatsBloc;
