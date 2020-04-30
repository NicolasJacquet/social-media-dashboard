import React from "react";
import { useDispatch } from "react-redux";
import { switchThemeColor } from "./../redux";

const ColorSwitcher = () => {
    const dispatch = useDispatch();

    const onSwitch = () => {
        dispatch(switchThemeColor());
    };

    return <button onClick={onSwitch}>Switch theme color</button>;
};

export default ColorSwitcher;
