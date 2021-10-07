// eslint-disable-next-line import/no-anonymous-default-export
import React from "react";
import ProTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";


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
                    <Poster 
                        key={movie.id} 
                        id={movie.id}
                        imageUrl={movie.poster_path}
                        title={movie.original_title} 
                        rating={movie.vote_average}
                        year={movie.release_date.substring(0, 4)}
                        isMovie={true}
                    />
                    ))}
                </Section>
            )}
            {upcoming && upcoming.length>0 && (
                <Section title="Popular Movies">
                    {upcoming.map(movie => (
                    <Poster 
                    key={movie.id} 
                    id={movie.id}
                    imageUrl={movie.poster_path}
                    title={movie.original_title} 
                    rating={movie.vote_average}
                    year={movie.release_date.substring(0, 4)}
                    isMovie={true}
                />
                    ))}
                </Section>
            )}
            {popular && popular.length>0 && (
                <Section title="Popular Movies">
                    {popular.map(movie =>(
                    <Poster 
                    key={movie.id} 
                    id={movie.id}
                    imageUrl={movie.poster_path}
                    title={movie.original_title} 
                    rating={movie.vote_average}
                    year={movie.release_date.substring(0, 4)}
                    isMovie={true}
                />
                    ))}
                </Section>
            )}
            {error && <Message color="#e74c3c"text={Message} />}
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