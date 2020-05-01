import React from "react";
import { useSelector } from "react-redux";
import FollowersBloc from "./followers-bloc";
import ContentContainer from "./content-container";
import css from "./../assets/styles/followers.module.scss";

const Followers = () => {
    const followersData = useSelector((state) => state.followersData);

    return (
        <ContentContainer>
            <div className={css.mainContainer}>
                {followersData.map((data) => {
                    return (
                        <FollowersBloc
                            key={data.type}
                            handle={data.handle}
                            type={data.type}
                            number={data.number}
                            gain={data.gain ? data.gain : null}
                            lost={data.lost ? data.lost : null}
                            link={data.link}
                        />
                    );
                })}
            </div>
        </ContentContainer>
    );
};

export default Followers;
