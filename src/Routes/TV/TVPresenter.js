// eslint-disable-next-line import/no-anonymous-default-export
import React from "react";
import ProTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
    padding : 0px 20px;
`; 


const TVPresenter = ({topRated, popular,airingToday,loading,error}) => 
    loading ? (
        <Loader />
    ) : (
        <Container>
            {topRated && topRated.length >0 && (
                <Section title="Top Rated Shows">
                    {topRated.map(show => (
                        <Poster 
                        key={show.id} 
                        id={show.id}
                        imageUrl={show.poster_path}
                        title={show.original_name} 
                        rating={show.vote_average}
                        year={show.first_air_date.substring(0, 4)}
                        
                    />                    
                ))}
                </Section>
            )}
            {popular && popular.length >0 && (
                <Section title="Popular Shows">
                    {popular.map(show => (
                        <Poster 
                        key={show.id} 
                        id={show.id}
                        imageUrl={show.poster_path}
                        title={show.original_name} 
                        rating={show.vote_average}
                        year={show.first_air_date.substring(0, 4)}
                        
                    />                    
                ))}
                </Section>
            )}
            {airingToday && airingToday.length >0 && (
                <Section title="Airing Todays Shows">
                    {airingToday.map(show => (
                        <Poster 
                            key={show.id} 
                            id={show.id}
                            imageUrl={show.poster_path}
                            title={show.original_name} 
                            rating={show.vote_average}
                            year={show.first_air_date.substring(0, 4)}
                            
                        />                    
                    ))}
                </Section>
            )}
            {error && <Message color="#e74c3c"text={Message} />}
        </Container>
    );

TVPresenter.prototype = {
    topRated : ProTypes.array,
    popular : ProTypes.array,
    airingToday : ProTypes.array,
    loadin : ProTypes.bool.isrequired,
    error : ProTypes.string
};

export default TVPresenter;