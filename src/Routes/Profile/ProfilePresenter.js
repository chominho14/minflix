import { authService } from "fBase";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const LogoutBtn = styled.button`
  background-color: white;
  color: black;
  width: 120px;
  height: 20px;
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
