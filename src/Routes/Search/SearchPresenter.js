// eslint-disable-next-line import/no-anonymous-default-export
import React from "react";
import ProTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message"

const Container = styled.div`
    padding: 0px 20px;
`;

const Form = styled.form`
    margin: 50px;
    width:100%;
`;

const Input = styled.input`
    all:unset;
    font-size: 28px;
    width:100%;
`;


const SearchPresenter = (
    {movieResults, tvResults,loading,searchTerm,handleSubmit,error, updateTerm}
    ) =>( <Container>
            <Form onSubmit={handleSubmit}>
                <Input 
                placeholder="Search Movies or TV show..." 
                value={searchTerm} 
                onChange={updateTerm} 
                />
            </Form>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {movieResults && movieResults.length > 0 && (
                        <Section title="Movie Results">
                            {movieResults.map(movie=> (
                                <span key={movie.id}>{movie.title}</span>
                            ))}
                        </Section>
                    )}
                    {tvResults && tvResults.length > 0 && (
                        <Section title="TV Show Results">
                            {tvResults.map(show=> (
                                <span key={show.id}>{show.name}</span>
                            ))}
                        </Section>
                    )}
                    {error && <Message color="#e74c3c"text={Message} />}
                    {tvResults && 
                    movieResults && 
                    tvResults.length === 0 && 
                    movieResults.length === 0 &&(
                        <Message text="Nothing Found" color="#95a5a6" />
                    )}
                </>
            )}
        </Container>
    );

SearchPresenter.prototype = {
    movieResults : ProTypes.array,
    tvResults : ProTypes.array,
    loading : ProTypes.bool.isrequired,
    searchTerm : ProTypes.string,
    error : ProTypes.string,
    handleSubmit : ProTypes.func.isRequired,
    updateTerm: ProTypes.func.isRequired
};

export default SearchPresenter;