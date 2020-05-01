import React from "react";
import classnames from "classnames";
import { useSelector } from "react-redux";
import css from "./../assets/styles/base-bloc.module.scss";

const BaseBloc = ({ children, className, link }) => {
    const isLight = useSelector((state) => state.theme);
    return (
        <article
            className={classnames(
                css.container,
                {
                    [css.dark]: !isLight,
                    [css.light]: isLight,
                },
                className
            )}
        >
            {children}
            <a
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                className={css.link}
            >
                Open the account
            </a>
        </article>
    );
};

export default BaseBloc;
