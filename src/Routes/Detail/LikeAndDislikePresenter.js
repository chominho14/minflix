import React, { useState } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import styled from "styled-components";

const LikeAndDislikePresenters = styled.div`
  display: flex;
`;

const LikeAndDisLikeSlash = styled.div`
  text-align: center;
  margin-top: 13px;
`;

const Like = styled.div`
  margin: 5px;
  cursor: pointer;
`;

const DisLike = styled.div`
  margin: 5px;
  cursor: pointer;
`;

//-------------------------------------------

const LikeAndDislikePresenter = () => {
  const [likecounter, setLikeCounter] = useState(0);
  const [disLikecounter, setDisLikeCounter] = useState(0);
  const onLikeClick = () => {
    setLikeCounter((current) => current + 1);
  };

  const onDisLikeClick = () => {
    setDisLikeCounter((current) => current + 1);
  };

  return (
    <LikeAndDislikePresenters>
      <Like onClick={onLikeClick}>
        좋아요
        <AiFillLike size="20" />
        {likecounter}개
      </Like>
      <LikeAndDisLikeSlash>/</LikeAndDisLikeSlash>
      <DisLike onClick={onDisLikeClick}>
        싫어요
        <AiFillDislike size="20" />
        {disLikecounter}개
      </DisLike>
    </LikeAndDislikePresenters>
  );
};

export default LikeAndDislikePresenter;
