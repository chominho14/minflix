import { authService } from "fBase";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const LogoutBtn = styled.button`
  cursor: pointer;
  border-radius: 20px;
  border: none;
  padding: 10px 0px;
  font-size: 12px;
  text-align: center;
  width: 150px;
  background: white;
  margin-top: 20px;
`;

const Profile = () => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <>
      <LogoutBtn onClick={onLogOutClick}>Log Out</LogoutBtn>
    </>
  );
};

export default Profile;
