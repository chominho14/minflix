import React, { useEffect, useState } from "react";
import { dbService } from "fBase";
import CommentPresenter2 from "Routes/Detail/CommentPresenter2";

const CommentPresenter = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  useEffect(() => {
    dbService.collection("comments").onSnapshot((snapshot) => {
      const commentArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(commentArray);
    });
  }, []);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("comments").add({
      text: comment,
      createAt: Date.now(),
    });
    setComment("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setComment(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={comment}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="&rarr;" />
      </form>
      <div>
        {comments.map((comment) => (
          <CommentPresenter2 key={comment.id} commentObj={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentPresenter;
