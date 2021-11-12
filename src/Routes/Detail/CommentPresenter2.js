import React from "react";

const CommentPresenter2 = ({ commentObj }) => (
  <div>
    <h4>{commentObj.text}</h4>
    <button>Delete Comment</button>
    <button>Edit Comment</button>
  </div>
);

export default CommentPresenter2;
