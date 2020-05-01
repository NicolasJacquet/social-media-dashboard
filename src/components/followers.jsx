import React from "react";
import FollowersBloc from "./followers-bloc";
import ContentContainer from "./content-container";
import css from "./../assets/styles/followers.module.scss";

const Followers = () => {
    return (
        <ContentContainer>
            <section className={css.mainContainer}>
                <FollowersBloc />
                <FollowersBloc />
                <FollowersBloc />
                <FollowersBloc />
            </section>
        </ContentContainer>
    );
};

export default Followers;
