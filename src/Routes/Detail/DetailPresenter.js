// eslint-disable-next-line import/no-anonymous-default-export
import React from "react";
import ProTypes from "prop-types";
import styled from "styled-components";



const DetailPresenter = ({result,loading,error}) => null;

DetailPresenter.prototype = {
    result : ProTypes.object,
    loadin : ProTypes.bool.isrequired,
    error : ProTypes.string
};

export default DetailPresenter;