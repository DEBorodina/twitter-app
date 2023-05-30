import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
  width: ${(props) => props.theme.LOADER_SIZE}px;
  height: ${(props) => props.theme.LOADER_SIZE}px;
  border: ${(props) => props.theme.LOADER_LINE_SIZE}px solid
    ${(props) => props.theme.BLUE_COLOR};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
  opacity: 1;
`;
