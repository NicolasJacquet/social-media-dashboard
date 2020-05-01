import React from "react";
import classnames from "classnames";
import { useSelector } from "react-redux";
import MainHeader from "./main-header";
import Followers from "./followers";
import Stats from "./stats";
import Footer from "./footer";
import css from "./../assets/styles/app.module.scss";

const App = () => {
    const isLight = useSelector((state) => state.theme);

    return (
        <div
            className={classnames(css.app, {
                [css.dark]: !isLight,
                [css.light]: isLight,
            })}
        >
            <MainHeader />
            <Followers />
            <Stats />
            <Footer />
        </div>
    );
};

export default App;
