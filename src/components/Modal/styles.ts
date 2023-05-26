import styled from 'styled-components';

export const OverLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(calc(50vw - 50%), calc(50vh - 50%));
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 20px;
  z-index: 1000;
  width: 90vw;
  max-width: 500px;
`;
