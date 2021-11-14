import { dbService } from "fBase";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const CommentProperty = styled.div`
  display: flex;
`;

const CommentContents = styled.h4`
  padding: 5px;
  font-size: 15px;
`;

const CommentActions = styled.div`
  display: flex;
  justify-content: center;
  right: 10px;
  top: 10px;
`;

const CommentActionsIcon = styled.span`
  padding-top: 7px;
`;

//-------Container----------
const CommentPresenter2 = ({ commentObj }) => {
  const [editing, setEditing] = useState(false);
  const [newComment, setNewComment] = useState(commentObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this comment?");
    if (ok) {
      await dbService.doc(`comments/${commentObj.id}`).delete();
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`comments/${commentObj.id}`).update({
      text: newComment,
    });
    setEditing(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewComment(value);
  };
  return (
    <CommentProperty>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Edit your comment"
              value={newComment}
              required
              onChange={onChange}
            />
            <input type="submit" value="Update Comment" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <CommentContents>{commentObj.text}</CommentContents>
          <CommentActions>
            <CommentActionsIcon onClick={onDeleteClick}>
              &nbsp;
              <FontAwesomeIcon icon={faTrash} />
            </CommentActionsIcon>
            <CommentActionsIcon onClick={toggleEditing}>
              &nbsp;
              <FontAwesomeIcon icon={faPencilAlt} />
            </CommentActionsIcon>
          </CommentActions>
        </>
      )}
    </CommentProperty>
  );
};

export default CommentPresenter2;
