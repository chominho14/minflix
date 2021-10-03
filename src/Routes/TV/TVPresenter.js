// eslint-disable-next-line import/no-anonymous-default-export
import React from "react";
import ProTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";

const Container = styled.div`
    padding : 0px 10px;
`; 


const TVPresenter = ({topRated, popular,airingToday,loading,error}) => 
    loading ? null : (
        <Container>
            {topRated && topRated.length >0 && (
                <Section title="Top Rated Shows">
                    {topRated.map(show => show.name)}
                </Section>
            )}
            {popular && popular.length >0 && (
                <Section title="Popular Shows">
                    {popular.map(show => show.name)}
                </Section>
            )}
            {airingToday && airingToday.length >0 && (
                <Section title="Airing Todays Shows">
                    {airingToday.map(show => show.name)}
                </Section>
            )}
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