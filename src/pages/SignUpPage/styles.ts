import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.form`
  width: 30%;
  min-width: 320px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.textColor};
`;

export const Title = styled.h1`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 30px;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 25px;
  height: 50px;
  background: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 6px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 16px;
  outline: none;
`;

export const LoginButton = styled.button`
  width: 100%;
  background: #1da1f2;
  border-radius: 76px;
  height: 50px;
  color: #ffffff;
  border: none;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 40px;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

export const SignUpLink = styled(Link)`
  text-decoration: none;
  color: #1da1f2;
  font-size: 18px;
  text-align: right;
  width: 100%;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ErrorText = styled.p`
  text-decoration: none;
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
  height: 25px;
  width: 100%;
`;