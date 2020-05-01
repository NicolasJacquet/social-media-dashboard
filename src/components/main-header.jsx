import React from "react";
import classnames from "classnames";
import { useSelector } from "react-redux";
import ContentContainer from "./content-container";
import ColorSwitcher from "./color-switcher";
import css from "./../assets/styles/main-header.module.scss";

const locale = (navigator && navigator.language) || "en-US";

const MainHeader = () => {
    const { theme: isLight, followersData } = useSelector((state) => state);
    const totalFollowers = followersData.reduce(
        (accumulator, currentValue) => accumulator + currentValue.number,
        0
    );
    const formattedNumber = new Intl.NumberFormat(locale).format(
        totalFollowers
    );

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
                        Total Followers: {formattedNumber}
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
