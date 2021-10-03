// eslint-disable-next-line import/no-anonymous-default-export
import React from "react";
import ProTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div`
    padding: 8px 10px;
`;

const HomePresenter = ({nowPlaying, popular,upcoming,loading,error}) => (
    loading ? (
        <Loader />
    ) : (
        <Container>
            {nowPlaying && nowPlaying.length>0 && (
                <Section title="Now Playing">
                    {nowPlaying.map(movie => (
                        <span key={movie.id}>{movie.title}</span>
                    ))}
                </Section>
            )}
            {upcoming && upcoming.length>0 && (
                <Section title="Popular Movies">
                    {upcoming.map(movie => (
                        <span key={movie.id}>{movie.title}</span>
                    ))}
                </Section>
            )}
            {popular && popular.length>0 && (
                <Section title="Popular Movies">
                    {popular.map(movie =>(
                        <span key={movie.id}>{movie.title}</span>
                    ))}
                </Section>
            )}
        </Container>
    )
);

HomePresenter.prototype = {
    nowPlaying : ProTypes.array,
    popular : ProTypes.array,
    upcoming : ProTypes.array,
    loadin : ProTypes.bool.isrequired,
    error : ProTypes.string
};

export default HomePresenter;