// eslint-disable-next-line import/no-anonymous-default-export
import React from "react";
import ProTypes from "prop-types";
import styled from "styled-components";


const HomePresenter = ({nowPlaying, popular,upcoming,loading,error}) => null;

HomePresenter.prototype = {
    nowPlaying : ProTypes.array,
    popular : ProTypes.array,
    upcoming : ProTypes.array,
    loadin : ProTypes.bool.isrequired,
    error : ProTypes.string
};

export default HomePresenter;