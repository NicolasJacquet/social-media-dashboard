import React from "react";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { switchThemeColor } from "./../redux";
import css from "./../assets/styles/color-switcher.module.scss";

const ColorSwitcher = () => {
    const dispatch = useDispatch();
    const isLight = useSelector((state) => state);

    const onSwitch = () => {
        dispatch(switchThemeColor());
    };

    return (
        <div className={css.switchContainer}>
            <p className={css.text}>Dark mode</p>
            <div>
                <input
                    id='switcher'
                    type='checkbox'
                    onChange={onSwitch}
                    checked={isLight}
                    className={css.input}
                />
                <label
                    className={classnames(css.label, {
                        [css.dark]: !isLight,
                        [css.light]: isLight,
                    })}
                    htmlFor='switcher'
                >
                    Switch theme
                </label>
            </div>
        </div>
    );
};

export default ColorSwitcher;
