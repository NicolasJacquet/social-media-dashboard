import React from "react";
import classnames from "classnames";
import { useSelector } from "react-redux";
import StatsBloc from "./stats-bloc";
import ContentContainer from "./content-container";
import css from "./../assets/styles/stats.module.scss";

const Stats = () => {
    const isLight = useSelector((state) => state);

    return (
        <ContentContainer>
            <h2
                className={classnames(css.sectionTitle, {
                    [css.dark]: !isLight,
                    [css.light]: isLight,
                })}
            >
                Overview - Today
            </h2>
            <section className={css.mainContainer}>
                <StatsBloc />
                <StatsBloc />
                <StatsBloc />
                <StatsBloc />
                <StatsBloc />
                <StatsBloc />
                <StatsBloc />
                <StatsBloc />
            </section>
        </ContentContainer>
    );
};

export default Stats;
