// eslint-disable-next-line import/no-anonymous-default-export
import React from "react";
import ProTypes from "prop-types";
import styled from "styled-components";


const TVPresenter = ({topRated, popular,airingToday,loading,error}) => null;

TVPresenter.prototype = {
    topRated : ProTypes.array,
    popular : ProTypes.array,
    airingToday : ProTypes.array,
    loadin : ProTypes.bool.isrequired,
    error : ProTypes.string
};

export default TVPresenter;