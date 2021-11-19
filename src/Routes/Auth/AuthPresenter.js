import React, { useState } from "react";
import { authService, firebaseInstance } from "fBase";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FcGoogle } from "react-icons/fc";
import {
  AiFillCaretDown,
  AiFillCaretLeft,
  AiFillCaretUp,
  AiFillCaretRight,
} from "react-icons/ai";
//------styled------

const Auths = styled.div`
  height: 100%;
  margin-top: 8%;
`;

const Container = styled.form`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  margin-left: 42%;
`;

const AuthInput = styled.input`
  max-width: 320px;
  width: 100%;
  padding: 10px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 1);
  margin-bottom: 10px;
  font-size: 12px;
  color: black;
  border: none;
`;

const AuthSubmit = styled.input`
  text-align: center;
  background: #4d8db5;
  color: white;
  margin-top: 10;
  cursor: pointer;
  max-width: 320px;
  width: 100%;
  padding: 10px;
  border-radius: 30px;
  font-size: 12px;
  border: none;
`;

const AuthError = styled.span`
  color: tomato;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5em;
  margin-top: 5px;
`;

const AuthSwitch = styled.span`
  color: #4d8db5;
  cursor: pointer;
  margin-top: 19px;
  margin-bottom: 50px;
  display: block;
  font-size: 12px;
  text-decoration: underline;
  text-align: center;
  width: 100px;
  margin-left: 48%;
`;

const AuthBtns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 320px;
  margin-left: 42%;
`;

const AuthBtn = styled.button`
  cursor: pointer;
  border-radius: 20px;
  border: none;
  padding: 10px 0px;
  font-size: 12px;
  text-align: center;
  width: 150px;
  background: white;
`;

const AuthLogo = styled.div`
  height: 50px;
  margin-left: 47%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
`;

//----container-----
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };
  return (
    <Auths>
      <AuthLogo>
        <AiFillCaretDown size="40" color="#4D8DB5" />
        <AiFillCaretLeft size="40" color="#4D8DB5" />
        <AiFillCaretUp size="40" color="#4D8DB5" />
        <AiFillCaretRight size="40" color="#4D8DB5" />
      </AuthLogo>
      <Container onSubmit={onSubmit}>
        <AuthInput
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <AuthInput
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <AuthSubmit
          type="submit"
          value={newAccount ? "Create Account" : "Sign In"}
        />
        {error && <AuthError>{error}</AuthError>}
      </Container>
      <AuthSwitch onClick={toggleAccount}>
        {newAccount ? "Sign In" : "Create Account"}
      </AuthSwitch>
      <AuthBtns>
        <AuthBtn onClick={onSocialClick} name="google">
          <FcGoogle />
          &nbsp; Continue with Google
        </AuthBtn>
        <AuthBtn onClick={onSocialClick} name="github">
          <FontAwesomeIcon icon={faGithub} />
          &nbsp; Continue with Github
        </AuthBtn>
      </AuthBtns>
    </Auths>
  );
};

export default Auth;
