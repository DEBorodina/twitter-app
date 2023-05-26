import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif; 

    input:-webkit-autofill, input:-webkit-autofill:focus{ 
    box-shadow: 0 0 0 1000px ${(props) => props.theme.backgroundColor} inset;
    zoom: 1.1;
    font-size:inherit;
    -webkit-text-fill-color: ${(props) => props.theme.textColor};
  }  

body {
  background-color: ${(props) => props.theme.backgroundColor};

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background: transparent;
    border-bottom-right-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.textColor}33;
    border-radius: 10px;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-corner {
    background: rgba(0, 0, 0, 0);
  }
}
`;
