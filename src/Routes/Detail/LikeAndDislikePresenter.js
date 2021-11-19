import React, { useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const LikeAndDislikePresenter = () => {
  const [likecounter, setLikeCounter] = useState(0);
  const [disLikecounter, setDisLikeCounter] = useState(0);
  const onLikeClick = () => {
    setLikeCounter(likecounter + 1);
  };

  const onDisLikeClick = () => {
    setDisLikeCounter(disLikecounter + 1);
  };

  return (
    <>
      <div>
        좋아요
        <AiOutlineLike onClick={onLikeClick} size="20" />
        {likecounter}개
      </div>
      <div>
        싫어요
        <AiOutlineDislike onClick={onDisLikeClick} size="20" />
        {disLikecounter}개
      </div>
    </>
  );
};

export default LikeAndDislikePresenter;
