// eslint-disable-next-line import/no-anonymous-default-export
import React from "react";
import ProTypes from "prop-types";
import styled from "styled-components";


const SearchPresenter = ({movieResults, tvResults,loading,searchTerm,handleSubmit,error}) => null;

SearchPresenter.prototype = {
    movieResults : ProTypes.array,
    tvResults : ProTypes.array,
    loading : ProTypes.bool.isrequired,
    searchTerm : ProTypes.string,
    error : ProTypes.string,
    handleSubmit : ProTypes.func.isRequired
    
};

export default SearchPresenter;