import React from "react";
import classnames from "classnames";
import { useSelector } from "react-redux";
import ColorSwitcher from "./color-switcher";
import css from "./../assets/styles/app.module.scss";

const App = () => {
    const isLight = useSelector((state) => state);

    return (
        <div
            className={classnames(css.app, {
                [css.dark]: !isLight,
                [css.light]: isLight,
            })}
        >
            Coding challenge
            <ColorSwitcher />
        </div>
    );
};

export default App;
