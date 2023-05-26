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
  width: 48px;
  height: 48px;
  border: 3px solid #1da1f2;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
  opacity: 1;
`;
