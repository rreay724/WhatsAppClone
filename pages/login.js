import React from "react";
import Head from "next/head";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import styled from "styled-components";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png" />
        <Button variant="outlined" onClick={signIn}>
          Sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  );
}

export default Login;

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

export const LoginContainer = styled.div`
  padding: 100px;
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

export const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;
