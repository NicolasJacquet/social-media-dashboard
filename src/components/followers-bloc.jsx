import React from "react";
import classnames from "classnames";
import BaseBloc from "./base-bloc";
import StatEvolution from "./stat-evolution";
import getIcon from "./../utils/get-icon";
import FormattedNumber from "./formatted-number";
import css from "./../assets/styles/followers-bloc.module.scss";

const FollowersBloc = ({ handle, type, number, gain, lost, link }) => {
    return (
        <BaseBloc className={classnames(css.container, css[type])} link={link}>
            <div className={css.handleContainer}>
                <img src={getIcon(type)} alt={type} />
                <span className={css.handle}>{handle}</span>
            </div>
            <p className={css.numberContainer}>
                <span className={css.number}>
                    <FormattedNumber number={number} />
                </span>
                <span className={css.numberLabel}>
                    {type === "youtube" ? "SUBSCRIBERS" : "FOLLOWERS"}
                </span>
            </p>
            <div className={css.statContainer}>
                {gain && <StatEvolution number={gain} isPositive />}
                {lost && <StatEvolution number={lost} />}
            </div>
        </BaseBloc>
    );
};
export default FollowersBloc;
