import React from "react";
import classnames from "classnames";
import BaseBloc from "./base-bloc";
import StatEvolution from "./stat-evolution";
import iconInstagram from "./../assets/images/icon-instagram.svg";
import css from "./../assets/styles/followers-bloc.module.scss";

const FollowersBloc = () => {
    const formattedNumber = new Intl.NumberFormat().format(111111);

    return (
        <BaseBloc
            className={classnames(css.container, css.instagram)}
            link='https://www.google.com'
        >
            <div className={css.handleContainer}>
                <img src={iconInstagram} alt='Instagram' />
                <span className={css.handle}>@handle</span>
            </div>
            <p className={css.numberContainer}>
                <span className={css.number}>{formattedNumber}</span>
                <span className={css.numberLabel}>FOLLOWERS</span>
            </p>
            <div className={css.statContainer}>
                <StatEvolution number={12} />
            </div>
        </BaseBloc>
    );
};
export default FollowersBloc;
