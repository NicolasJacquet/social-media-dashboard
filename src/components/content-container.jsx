import React from "react";
import classnames from "classnames";
import css from "./../assets/styles/content-container.module.scss";

const ContentContainer = ({ children, className }) => {
    return (
        <div className={classnames(css.contentContainer, className)}>
            {children}
        </div>
    );
};

export default ContentContainer;
