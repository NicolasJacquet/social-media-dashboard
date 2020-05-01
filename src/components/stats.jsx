import React from "react";
import classnames from "classnames";
import { useSelector } from "react-redux";
import StatsBloc from "./stats-bloc";
import ContentContainer from "./content-container";
import css from "./../assets/styles/stats.module.scss";

const Stats = () => {
    const { theme: isLight, stats } = useSelector((state) => state);

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
                {stats.map((data) => {
                    return (
                        <StatsBloc
                            key={data.id}
                            label={data.label}
                            type={data.type}
                            number={data.number}
                            lost={data.lost ? data.lost : null}
                            gain={data.gain ? data.gain : null}
                        />
                    );
                })}
            </section>
        </ContentContainer>
    );
};

export default Stats;
