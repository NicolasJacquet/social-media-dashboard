import React from "react";
import classnames from "classnames";
import { useSelector } from "react-redux";
import ContentContainer from "./content-container";
import ColorSwitcher from "./color-switcher";
import css from "./../assets/styles/main-header.module.scss";

const MainHeader = () => {
    const isLight = useSelector((state) => state);

    return (
        <header
            className={classnames(css.mainHeader, {
                [css.dark]: !isLight,
                [css.light]: isLight,
            })}
        >
            <ContentContainer className={css.contentContainer}>
                <div className={css.titleContainer}>
                    <h1 className={css.title}>Social Media Dashboard</h1>
                    <p className={css.totalFollowers}>
                        Total Followers: 23,004
                    </p>
                </div>
                <div className={css.switchContainer}>
                    <ColorSwitcher />
                </div>
            </ContentContainer>
        </header>
    );
};

export default MainHeader;
